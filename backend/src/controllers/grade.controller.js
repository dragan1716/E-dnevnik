const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { gradeService } = require('../services');

const createGrade = catchAsync(async (req, res) => {
  const grade = await gradeService.createGrade(req.body);
  res.status(httpStatus.CREATED).send(grade);
});

const getGrades = async (req, res) => {
  try {
    const grades = await gradeService.queryGrades();
    res.json(grades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createGrade,
  getGrades,
};
