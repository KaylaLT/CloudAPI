const express = require('express');
const routes = express.Router();
const pgp = require('pg-promise')();
const db = pgp({
    database: 'final'
});


routes.get('/apis', async (req, res) => {
    if (req.query.category) {
        const getCategory = await db.manyOrNone('select * from apis where category = $(category)', {
            category: req.query.category
        });
        res.status(200).json(getCategory);
    } else {
        const all = await db.manyOrNone('select * from apis')
        res.status(200).json(all);
    }

});

routes.get('/apis/:id', async (req, res) => {
    const api = await db.oneOrNone('SELECT * FROM apis WHERE id = $(id)', {
        id: +req.params.id
    });
    if (!api) {
        return res.status(404).send('id could not be found')
    }
    res.json(api)

});


routes.put('/apis/:id', async (req, res) => {

    const idExists = await db.oneOrNone('SELECT id from apis WHERE id = $(id)', {
        id: +req.params.id

    });

    if (!idExists) {
        return res.status(404).send('The id does not exist');
    }

     await db.oneOrNone(
        `UPDATE apis SET 
        name = $(name),
        description = $(description),
        url = $(url),
        category = $(category),
        auth = $(auth),
        cors = $(cors)
        WHERE id = $(id)
        `, {

        id: +req.params.id,
        name: req.body.name,
        description: req.body.description,
        url: req.body.url,
        category: req.body.category,
        auth: req.body.auth,
        cors: req.body.cors
    });
    res.json(
        await db.oneOrNone(`SELECT id, name, description, url, category, auth, cors from apis WHERE id = $(id)`, {
            id: +req.params.id
        }))
}),





    routes.post('/apis', async (req, res) => {
        try {
            const newApi = await db.oneOrNone('INSERT INTO apis (name, description, url, category, auth, cors) VALUES ($(name), $(description), $(url), $(category), $(auth), $(cors)) RETURNING id', {
                name: req.body.name,
                description: req.body.description,
                url: req.body.url,
                category: req.body.category,
                auth: req.body.auth,
                cors: req.body.cors,
            });
            

            const posted = await db.oneOrNone('SELECT id, name, description, url, category, auth, cors FROM apis WHERE id = $(id)', {
                id: newApi.id
            });
            return res.status(201).json(posted)
        } catch (error) {
            if (error.constraint === 'url') {
                return res.status(400).json(error);
            }
        }
    }),



    routes.delete('/apis/:id', async (req, res) => {

        await db.none('DELETE FROM apis WHERE id =$(id)', {
            id: +req.params.id
        });

        return res.status(204).send();
    });


module.exports = routes;