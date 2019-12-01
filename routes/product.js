const express = require('express');
const db = require('../db');

const router = express.Router();


router.get('/', (req, res) => {
    
    const connection = db.connect()
    const sql = `select * from category`;
    connection.query(sql, (err, result) => {
        connection.end();
        if(err==null)
        {
            res.send(JSON.stringify(result))
        }
        else
        {
            res.send(JSON.stringify(err))
        }
    })
})

router.post('/', (req, res) => {
    const {title, description, price} = req.body;
    const connection = db.connect()
    const sql = `insert into product (title, description, price) values ('${title}', '${description}', ${price})`
    connection.query(sql, (err, result) => {
        connection.end();
        if(err==null)
        {
            res.send(JSON.stringify(result))
        }
        else
        {
            res.send(JSON.stringify(err))
        }
    })
})


router.put('/:id', (req, res) => {
    const id = req.params.id;
    const {description, price} = req.body;
    const connection = db.connect()
    const sql = `update categories set description = '${description}', price = ${price} where id = ${id}`;
    connection.query(sql, (err, result) => {
        connection.end();
        if(err==null)
        {
            res.send(JSON.stringify(result))
        }
        else
        {
            res.send(JSON.stringify(err))
        }
    })
})


router.delete('/:id', (req, res) => {
  
    const connection = db.connect()
    const sql = `delete from category where id = ${req.params.id}`;
    connection.query(sql, (err, result) => {
        connection.end();
        if(err==null)
        {
            res.send(JSON.stringify(result))
        }
        else
        {
            res.send(JSON.stringify(err))
        }
    })
})




module.exports = router