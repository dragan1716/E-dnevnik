const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { subjectService } = require('../services');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');

const createSubject = catchAsync(async (req, res) => {
  const subject = await subjectService.createSubject(req.body);
  res.status(httpStatus.CREATED).send(subject);
});

const getSubjects = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['subjectName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page', 'populate']);

  const results = await subjectService.querySubjects(filter, options);
  res.send(results);
});

const getSubjectById = catchAsync(async (req, res) => {
  const subject = await subjectService.getSubjectById(req.params.subjectId);
  if (!subject) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Subject not found');
  }
  res.send(subject);
});

module.exports = {
  createSubject,
  getSubjects,
  getSubjectById,
};
