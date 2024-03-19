const express = require('express');
const validate = require('../../middlewares/validate');
const semesterValidation = require('../../validations/semester.validation');
const semesterController = require('../../controllers/semester.controller');

const router = express.Router();

router.route('/').get(semesterController.getSemesters);

module.exports = router;
