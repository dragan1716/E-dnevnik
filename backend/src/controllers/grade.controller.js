const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { gradeService } = require('../services');

const createGrade = catchAsync(async (req, res) => {
  const grade = await gradeService.createGrade(req.body);
  res.status(httpStatus.CREATED).send(grade);
});

const getGrades = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['subjectName', 'gradeText', 'gradeNumber']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await gradeService.queryGrades(filter, options);
  res.send(result);
});

module.exports = {
  createGrade,
  getGrades,
};
