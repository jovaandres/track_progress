const express = require('express');
const router = express.Router();
const { getProgress } = require('../controller/progress_controller');

router.get('/progress', getProgress);

module.exports = router;
