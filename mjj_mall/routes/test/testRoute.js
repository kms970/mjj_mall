const express = require('express');
const router = express.Router();

const controller = require('./testRouteController');

router.post('/test_url',controller.testAndroidPost);
router.get('/test_url',controller.testAndroidGet);

module.exports=router;