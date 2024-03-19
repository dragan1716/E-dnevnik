const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');
const gradesRoute = require('./grade.route');
const subjectRoute = require('./subject.route');
const semesterRoute = require('./semester.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/grades',
    route: gradesRoute,
  },
  {
    path: '/subjects',
    route: subjectRoute,
  },
  {
    path: '/subjects/:subjectId',
    route: subjectRoute,
  },
  {
    path: '/semesters',
    route: semesterRoute,
  },
  {
    path: '/activities',
    route: semesterRoute,
  },
  {
    path: '/activities/:subjectId',
    route: semesterRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Middleware funkcija za obradu grešaka
router.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

module.exports = router;
