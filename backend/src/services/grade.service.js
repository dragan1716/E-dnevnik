const Grade = require('../models/grade.model');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const createGrade = async (gradeBody) => {
  const grade = await Grade.create(gradeBody);
  console.log(grade);

  return grade;
};
