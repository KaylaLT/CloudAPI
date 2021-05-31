const express = require('express');
const routes = express.Router();
const pgp = require('pg-promise')();
const db = pgp({
    database: 'final'
});










routes.get('/apis', async (req, res) => {
    if (req.query.category) {
            const all = await db.manyOrNone('select * from apis where category = $(category)', {
                category: req.query.category

            });
        res.status(200).json(all);
    } else {
        const all = await db.manyOrNone('select * from apis') 
                    
                    res.status(200).json(all);
    }

   
});

// routes.post('/apis', (req, res) => {
//      const newApis = {
//          name: req.body.name,
//          description: req.body.description,
//          url: req.body.url,
//          auth: req.body.auth,
//          cors: req.body.cors
//      }
//      doors.push(newApis);
//      res.status(201).json(newApis);
// });













module.exports = routes;