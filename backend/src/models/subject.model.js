const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const subjectSchema = mongoose.Schema(
  {
    subjectName: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
subjectSchema.plugin(toJSON);
subjectSchema.plugin(paginate);

/**
 * @typedef Subject
 */
const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
