const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { semesterService } = require('../services');

const getSemesters = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['fromDate', 'toDate']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await semesterService.querySemesters(filter, options);
  res.send(result);
});

module.exports = {
  getSemesters,
};
