const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const gradeValidation = require('../../validations/grade.validation');
const gradeController = require('../../controllers/grade.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageGrades'), validate(gradeValidation.createGrade), gradeController.createGrade)
  .get(validate(gradeValidation.getGrades), gradeController.getGrades);

// router
//   .route('/:userId')
//   .get(auth('getUsers'), validate(userValidation.getUser), userController.getUser)
//   .patch(auth('manageUsers'), validate(userValidation.updateUser), userController.updateUser)
//   .delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;
