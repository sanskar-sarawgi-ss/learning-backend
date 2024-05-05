// require('dotenv').config({path: './env'})
import { app } from './app.js'
import DbConnect from './db/index.js'
import dotenv from 'dotenv'

dotenv.config({path: '.env'})
DbConnect().then(() => {

    try{
        
        app.on('error' , (error) => {
            console.log(error)
            throw(error)
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log("Server Listening at Port ", process.env.PORT)
        })

    }catch(error){
        console.log(error)
    }

}
).catch((error) => {
    console.log("connection failed")
})