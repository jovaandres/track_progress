const express = require('express');
const router = express.Router();
const { getProgress, postProgress } = require('../controller/progress_controller');

router.get('/progress', getProgress);
router.post('/progress', postProgress);

module.exports = router;
