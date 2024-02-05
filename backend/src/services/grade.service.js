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
const queryGrades = async (filter, options) => {
  const grades = await Grade.paginate(filter, options);
  return grades;
};

module.exports = {
  createGrade,
  queryGrades,
};
