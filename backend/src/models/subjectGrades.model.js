const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const subjectGradesSchema = new mongoose.Schema(
  {
    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',
      required: true,
    },
    gradeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Grade',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
gradeSchema.plugin(toJSON);
gradeSchema.plugin(paginate);

/**
 * @typedef SubjectGrade
 */

const SubjectGrade = mongoose.model('SubjectGrade', subjectGradesSchema);

module.exports = SubjectGrade;
