const express = require("express")

const ServerConfig = require('./config/serverConfig')

const PORT = process.env.PORT

const app = express();

app.listen(ServerConfig.PORT,()=>{
    console.log(`Server started at port ${ServerConfig. PORT}...!`)
   
})