const Joi = require('joi');

const createSubject = {
  body: Joi.object().keys({
    subjectName: Joi.string().required(),
  }),
};

const getSubjects = {
  query: Joi.object().keys({
    subjectName: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number(),
    page: Joi.number(),
  }),
};

module.exports = {
  createSubject,
  getSubjects,
};
