const express = require('express');
const router = express.Router();
const mainModel = require('../models/mainModel');

router.get('/', (req, res) => {
    const stockData = mainModel.getStockData();
    res.render('index', { data: stockData }); // Use res.render para renderizar a view com os dados
});

module.exports = router;
