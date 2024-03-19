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
 */

const querySubjects = async (filter, options) => {
  const subjects = await Subject.paginate(filter, { ...options, populate: 'subjectId' });
  return subjects;
};

module.exports = {
  createSubject,
  querySubjects,
};
