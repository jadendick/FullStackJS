import config from './config'
import apiRouter from './api';

import express from 'express';


const server = express();   // Create server

server.set('view engine', 'ejs');   // Set view engine to be EJS

server.get('/', (req, res) => {
    res.render('index',{
        content: "stri <em>hi</em> ng"
    });
})

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Listening on ', config.port);
})