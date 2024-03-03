const Subject = require('../models/subject.model');

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

//arr grades,ime subjecta

const querySubjects = async (subjectName) => {
  try {
    const subjects = await Subject.aggregate([
      {
        $lookup: {
          from: 'grade',
          localField: '_id',
          foreignField: 'subjectId',
          as: 'grades',
        },
      },
      {
        $project: {
          subjectName: 1,
          semesterId: '$grades.semesterId',
          grades: '$grades.value',
          type: '$grades.type',
        },
      },
    ]);
    console.log('Subjects:', subjects);
    return subjects;
  } catch (error) {
    throw new Error('Error fetching subjects with grades');
  }
};

module.exports = {
  createSubject,
  querySubjects,
};
