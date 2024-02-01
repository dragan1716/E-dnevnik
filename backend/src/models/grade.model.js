const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const gradeSchema = mongoose.Schema({
  subjectName: {
    type: String,
    required: true,
    trim: true,
  },
  gradeText: {
    type: String,
    required: true,
    trim: true,
  },
  gradeNumber: {
    type: Number,
    required: true,
    trim: true,
  },
});

// add plugin that converts mongoose to json
gradeSchema.plugin(toJSON);
gradeSchema.plugin(paginate);

/**
 * @typedef Grade
 */
const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;
