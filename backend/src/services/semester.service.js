const Semester = require('../models/semester.model');

/**
 * Query for semesters
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */

// const querySemesters = async (filter, options) => {
//   const semesters = await Semester.paginate(filter, options);
//   console.log('SEMESTRI: ', semesters);
//   return semesters;
// };

// const querySemesters = async () => {
//   const semesters = await Semester.find();
//   console.log(semesters);
//   return semesters;
// };

const querySemesters = async () => {
  try {
    const semesters = await Semester.find();
    return semesters;
  } catch (error) {
    console.error('Greška prilikom dohvaćanja semestara:', error);
    throw error;
  }
};

module.exports = {
  querySemesters,
};
