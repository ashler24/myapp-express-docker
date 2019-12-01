const express = require('express');
const routerProduct = require('./routes/product')
const app = express();

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Header","Origin,X-Requested-With,Content-Type,Accept");
    next();
});

app.use(express.json());

app.use('/product', routerProduct);

app.get('/', (req, res) => {
    res.send('welcome to my backend');
})

app.listen(9898,'0.0.0.0', ()=>{
    console.log('server listening on port 9898');
})