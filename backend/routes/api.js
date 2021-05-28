const express = require('express');
const routes = express.Router();
const pgp = require('pg-promise')();
const db = pgp({
    database: 'final'
});









routes.get('/apis', async (req, res) => {
    const all = await db.manyOrNone("select * from apis");
    res.status(200).json(all);
});















module.exports = routes;