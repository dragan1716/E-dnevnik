const express = require('express');
const auth = require('../../middlewares/validate');
const validate = require('../../middlewares/validate');
const subjectValidation = require('../../validations/subject.validation');
const subjectController = require('../../controllers/subject.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageSubjects'), validate(subjectValidation.createSubject), subjectController.createSubject)
  // .get(validate(subjectValidation.getSubjects), subjectController.getSubjects);
  .get(subjectController.getSubjects);

module.exports = router;
