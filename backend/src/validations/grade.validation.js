const Joi = require('joi');

const createGrade = {
  body: Joi.object().keys({
    subjectId: Joi.string().required(),
    semesterId: Joi.string().required(),
    userId: Joi.string().required(),
    teacherId: Joi.string().required(),
    value: Joi.number().required(),
    type: Joi.string().required(),
  }),
};

//dodati required
const getGrades = {
  query: Joi.object().keys({
    subjectId: Joi.string(),
    semesterId: Joi.string(),
    userId: Joi.string(),
    teacherId: Joi.string(),
    value: Joi.number(),
    type: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number(),
    page: Joi.number(),
  }),
};

module.exports = {
  createGrade,
  getGrades,
};
