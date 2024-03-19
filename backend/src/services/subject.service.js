const Subject = require('../models/subject.model');
const Semester = require('../models/semester.model');

const createSubject = async (subjectBody) => {
  const subject = await Subject.create(subjectBody);

  return subject;
};

/**
 * Query for subject
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 *  * Query for subject
 * @param {string} subjectName - Name of the subject to query grades for
 * @returns {Promise<Array>} - Array of grades for the specified subject
 */

const assignGradesToSemesters = async (grades, semesters) => {
  try {
    const semesterGrades = semesters.map((semester) => ({
      semesterType: semester.semesterType,
      grades: [],
    }));
    console.log('SEMESTER GRADES: ', semesterGrades);

    grades.forEach((grade) => {
      const { _id, value, type, createdAt, description } = grade;
      const newGrade = { _id, value, type, createdAt, description };

      const semesterType = semesters.find((sem) => sem._id.equals(grade.semesterId)).semesterType;

      semesters.forEach((semester, index) => {
        if (semesterType === semester.semesterType) {
          const fromDate = new Date(semester.fromDate);
          const toDate = new Date(semester.toDate);
          const gradeDate = new Date(createdAt);

          if (gradeDate >= fromDate && gradeDate <= toDate) {
            semesterGrades[index].grades.push(newGrade);
          }
        }
      });
    });

    console.log('SEMESTER GR: ', semesterGrades);
    return semesterGrades;
  } catch (error) {
    throw new Error('Error assigning grades to semesters');
  }
};

const querySubjects = async () => {
  try {
    const semesters = await Semester.find();
    const subjects = await Subject.aggregate([
      {
        $lookup: {
          from: 'grade',
          localField: '_id',
          foreignField: 'subjectId',
          as: 'grades',
        },
      },
    ]);
    const formattedSubjects = await Promise.all(
      subjects.map(async (subject) => {
        const gradesBySemester = await assignGradesToSemesters(subject.grades, semesters);
        return {
          subjectName: subject.subjectName,
          subjectId: subject._id,
          semesters: gradesBySemester,
        };
      })
    );
    console.log('Formatted Subjects:', formattedSubjects);
    return formattedSubjects;
  } catch (error) {
    throw new Error('Error fetching subjects with grades');
  }
};

/**
 * Get subject by id
 * @param {ObjectId} id
 * @returns {Promise<Subject>}
 */

const getSubjectById = async (id) => {
  try {
    const subjects = await querySubjects();
    const subject = subjects.find((subject) => subject.subjectId.toString() === id.toString());

    if (!subject) {
      throw new Error('Subject not found');
    }
    console.log('SUBJECT: ', subject);
    return subject;
  } catch (error) {
    throw new Error('Error finding subject by ID');
  }
};

module.exports = {
  createSubject,
  querySubjects,
  getSubjectById,
};
