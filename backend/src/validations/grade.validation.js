const Joi = require('joi');

const createGrade = {
  body: Joi.object().keys({
    subjectName: Joi.string().required(),
    gradeText: Joi.string().required(),
    gradeNumber: Joi.string().required(),
  }),
};

const getGrades = {
  query: Joi.object().keys({
    subjectName: Joi.string(),
    gradeText: Joi.string(),
    gradeNumber: Joi.number(),
    sortBy: Joi.string(),
    limit: Joi.number(),
    page: Joi.number(),
  }),
};

module.exports = {
  createGrade,
  getGrades,
};
