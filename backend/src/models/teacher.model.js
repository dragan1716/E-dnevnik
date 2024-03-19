const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const teacherSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
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
teacherSchema.plugin(toJSON);
teacherSchema.plugin(paginate);

/**
 * @typedef Subject
 */
const Subject = mongoose.model('Teacher', teacherSchema);

module.exports = Subject;
