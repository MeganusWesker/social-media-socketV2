const http = require('http')
const express = require('express');
const app  = express();
const server=http.createServer(app);
const {Server} =require('socket.io');


module.exports.io=new Server(server,{
    cors:{
        origin:'*',
        
    }
});

const {ioHandler} =require('./socketHandler');
ioHandler();



server.listen(4000,()=>{
    console.log(`server started at http://localhost:4000`);
})
