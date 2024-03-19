const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const gradeSchema = mongoose.Schema(
  {
    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject', // Ime povezane kolekcije
      required: true,
    },
    semesterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'semester',
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'teacher',
      required: true,
    },
    value: {
      type: Number,
      required: true,
      trim: true,
    },
    type: {
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
    collection: 'grade',
  }
);

// add plugin that converts mongoose to json
gradeSchema.plugin(toJSON);
gradeSchema.plugin(paginate);

/**
 * @typedef Grade
 */
const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;
