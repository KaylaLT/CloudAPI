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

routes.get('/apis/:id', async (req, res) => {   
    const id = res.json(await db.oneOrNone('SELECT * FROM apis WHERE id = $(id)', {
        id: req.params.id
    }));
    console.log('working 2') 
    if (!id) {
        return res.status(404).send('id could not be found')
    }
    res.json()
    
});


routes.put('/apis/:id', async (req, res) => {
    
    const apiUpdated = await db.oneOrNone('SELECT id from apis WHERE id = $(id)', {
        id: +req.params.id
        // name: req.params.name,
        // description: req.params.description,
        // url: req.params.url,
        // category: req.params.category,
        // auth: req.params.auth,
        // cors: req.params.cors
    });console.log('works here')
    if (!apiUpdated) {
        
        return res.status(404).send('Your update failed');
    } const upDated = await db.oneOrNone(
        'UPDATE apis SET $(id) = $(change) WHERE id = $(id) RETURNING id',
        {
            
            id: +req.params.id,
            // column: req.body.column,
            change: req.body.change,
        });
    res.json(
        await db.oneOrNone(`SELECT id, name, description, url, category, auth, cors from cities WHERE id = $(id)`, {
            id: upDated.id,

        }))
}),

    
    
    
    
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
            console.log('working 4')
        
            const posted = await db.oneOrNone('SELECT id, name, description, url, category, auth, cors FROM apis WHERE id = ${id}', { id: newApi.id });
            return res.status(201).json(posted)
        } catch (error) {
            if (error.constraint === 'url') {
                return res.status(400).json(error);
            }
        }
        console.log('working 5')
    }),



    routes.delete('/apis/:id', async (req, res) => {
        await db.none('DELETE FROM apis WHERE id =${id}', {
            id: +req.params.id
        });
        console.log('working 6');
        return res.status(204).send();
        
    });


module.exports = routes;
