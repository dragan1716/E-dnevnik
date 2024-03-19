const Joi = require('joi');

//dodati required
const getSemesters = {
  query: Joi.object().keys({
    fromDate: Joi.date(),
    toDate: Joi.date(),
    sortBy: Joi.string(),
    limit: Joi.number(),
    page: Joi.number(),
  }),
};

module.exports = {
  getSemesters,
};
