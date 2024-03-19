const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { teacherService } = require('../services');
const pick = require('../utils/pick');

const getTeachers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['firstName', 'lastName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page', 'populate']);

  const results = await subjectService.querySubjects(filter, options);
  res.send(results);
});

module.exports = {
  createSubject,
  getSubjects,
};
