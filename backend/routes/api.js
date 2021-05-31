const express = require('express');
const routes = express.Router();
const pgp = require('pg-promise')();
const db = pgp({
    database: 'final'
});










routes.get('/apis', async (req, res) => {
    let sql = "select * from apis";
    if (req.query.category) {
        sql += 'where category = $(category)'
    }


     
    const all = await db.manyOrNone('select * from apis where category = $(category)', {category: req.query.category});
    res.status(200).json(all);
});















module.exports = routes;