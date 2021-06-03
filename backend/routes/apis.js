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

routes.get('/apis/:category', async (req, res) => {

    res.json(await db.oneOrNone('SELECT * FROM apis WHERE id = $(category)', {
        category: req.params.category
    }));
    if (!category) {
        return res.status(404).send('Category could not be found')
    }
    res.json(category)
});

routes.put('/apis', async (req, res) => {
    try {
        const apiUpdated = await db.one('INSERT INTO apis (id, name, description, url, category, auth, cors) VALUES ( $(id), $(name), $(description), $(url), $(category), $(auth), $(cors)) RETURNING id', {
            id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            url: req.body.url,
            category: req.body.category,
            auth: req.body.auth,
            cors: req.body.cors
        });
        res.status(201).json(apiUpdated);
    } catch (error) {
        if (error.constraint === 'url') {
            return res.status(500).send('this url already has a home')
        }
    }
});

routes.post('/apis', async (req, res) => {
    try {
        const newApi = await db.oneOrNone('INSERT INTO apis (name, description, url, category, auth, cors) VALUES (${name}, ${description}, ${url}, ${category}, ${auth}, ${cors}) RETURNING id', {
            name: req.body.name,
            description: req.body.description,
            url: req.body.url,
            category: req.body.category,
            auth: req.body.auth,
            cors: req.body.cors,
        });
        console.log('working')
        
        const posted = await db.one('SELECT id, name, description, url, category, auth, cors FROM apis WHERE id = ${id}', { id: newApi.id });
        return res.status(201).json(posted)
    } catch (error) {
        if (error.constraint === 'url') {
            return res.status(400).json(error);
        }
    }

});


    routes.delete('/apis/:id', async (req, res) => {
        await db.none('DELETE FROM apis WHERE id =${id}', {
            id: +req.params.id
        });
        return res.status(204).send();
    });


module.exports = routes;
