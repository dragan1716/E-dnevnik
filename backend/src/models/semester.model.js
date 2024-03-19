const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const semesterSchema = mongoose.Schema(
  {
    fromDate: {
      type: Date,
      required: true,
      trim: true,
    },
    toDate: {
      type: Date,
      required: true,
      trim: true,
    },
    semesterType: {
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
semesterSchema.plugin(toJSON);
semesterSchema.plugin(paginate);

/**
 * @typedef Semester
 */
const Semester = mongoose.model('Semester', semesterSchema, 'semester');

module.exports = Semester;
