const express = require('express');


const router = express.Router();
const controller = require('../controller/controllers');

router.get('/review',controller.getReviews );

router.post('/review',controller.postReviews );

router.get('/search',controller.FilterByCompanyName)



module.exports = router;