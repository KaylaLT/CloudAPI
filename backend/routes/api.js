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

//  routes.post('/apis', (req, res) => {
//       const newApis = {
//           name: req.body.name,
//           description: req.body.description,
//           category: req.body.category,
//           url: req.body.url,
//           auth: req.body.auth,
//           cors: req.body.cors
//      }
//     apis.push(newApis);
//      res.status(201).json(newApis);
//  });


routes.get('/apis/:id', async (req, res) => {

})


routes.put('/apis', async (req, res) => {
   
    const update = await db.many('INSERT INTO apis (id, name, description, url, category, auth, cors) VALUES ( ${id}, ${name}, ${description}, ${url}, ${category}, ${auth}, ${cors} ) RETURNING id', {
        
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        url: req.body.url,
        category: req.body.category,
        auth: req.body.auth,
        cors: req.body.cors

    });

    const newAPI = await db.one('UPDATE id, name, description, url, category, auth, cors FROM apis WHERE id = ${id}', { id: update.id } ),
        
        return res.status(201).json(update);
});












module.exports = routes;