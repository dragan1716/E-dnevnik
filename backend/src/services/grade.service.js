const Grade = require('../models/grade.model');

const createGrade = async (gradeBody) => {
  const grade = await Grade.create(gradeBody);
  console.log(grade);

  return grade;
};

/**
 * Query for grades
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */

const queryGrades = async (filter, options) => {
  try {
    const { page = 1, limit = 10, sortBy } = options;

    const pipeline = [];
    pipeline.push({ $sort: { createdAt: -1 } });

    // Match stage to apply filter
    pipeline.push({ $match: filter });

    // Lookup stages
    pipeline.push({
      $lookup: {
        from: 'users',
        localField: 'userId',
        foreignField: '_id',
        as: 'user',
      },
    });
    pipeline.push({
      $lookup: {
        from: 'subjects',
        localField: 'subjectId',
        foreignField: '_id',
        as: 'subject',
      },
    });

    // Unwind stages
    pipeline.push({ $unwind: '$user' });
    pipeline.push({ $unwind: '$subject' });

    // Projection stage
    pipeline.push({
      $project: {
        _id: 1,
        grade: 1,
        subject: '$subject.subjectName',
        createdAt: 1,
        value: 1,
        type: 1,
        description: 1,
      },
    });

    const totalCount = await Grade.countDocuments(filter);

    const skip = (page - 1) * limit;
    pipeline.push({ $skip: skip });
    pipeline.push({ $limit: limit });

    // Execute aggregation pipeline
    const result = await Grade.aggregate(pipeline);

    const totalPages = Math.ceil(totalCount / limit);

    return {
      grades: result,
      page: page,
      limit: limit,
      totalPages: totalPages,
      totalResults: totalCount,
    };
  } catch (error) {
    throw new Error('Error fetching grades with details');
  }
};

module.exports = {
  createGrade,
  queryGrades,
};
