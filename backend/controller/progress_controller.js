const catchAsync = require('../utils/catch-async');
const Progress = require('../models/users.models');

const getProgress = catchAsync(async (req, res) => {
    const result = await Progress.find({});
    res.status(200).json({
        error: false,
        data: result
    });
});

const postProgress = catchAsync(async (req, res) => {
    const {name, progress} = req.body;
    Progress.create({name, progress});
})

module.exports = {
    getProgress,
    postProgress
}