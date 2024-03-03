const Grade = require('../models/grade.model');

const createGrade = async (gradeBody) => {
  const grade = await Grade.create(gradeBody);
  console.log(grade);

  return grade;
};

/**
 * Query for grades
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryGrades = async () => {
  try {
    const grades = await Grade.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'user',
        },
      },
      {
        $lookup: {
          from: 'subjects',
          localField: 'subjectId',
          foreignField: '_id',
          as: 'subject',
        },
      },
      {
        $unwind: '$user',
      },
      {
        $unwind: '$subject',
      },
      {
        $project: {
          _id: 1,
          grade: 1,
          // user: '$user',
          subject: '$subject.subjectName',
          createdAt: 1,
          value: 1,
          type: 1,
        },
      },
    ]);
    return grades;
  } catch (error) {
    throw new Error('Error fetching grades with details');
  }
};

module.exports = {
  createGrade,
  queryGrades,
};
