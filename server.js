import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './router/route.js';

import { config } from 'dotenv';



//  import connection file
import connect from './database/conn.js';
import mongoose, { mongo } from 'mongoose';

const app = express()

// connect();

// app middlewares
app.use(morgan('tiny'));
app.use(cors())
app.use(express.json())
config()

const port = process.env.PORT || 8080;




// routes
app.use('/api', router)
app.use('/result', router)

app.get('/', (req,res) =>{
    try {
        res.json('Get Request..')
        
    } catch (error) {
        res.json(error)
    }
})

console.log(port)
/////.........start the server only when we have valid connect............................................
connect().then(()=>{
    try {
        app.listen(port, ()=>{
            console.log(`Server connected at http://localhost:${port} `)
        })
    } catch (error) {
        console.log("server cannot connected....")
        
    }
}).catch(error =>{
    console.log("invailed database connection..")
})
