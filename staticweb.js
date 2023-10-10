import fs from 'fs'
import path from 'path'
import http from 'http'
import dotenv from 'dotenv'
dotenv.config({path:"config.env"})
let port=process.env.PORT
let host=process.env.HOST

let server=http.createServer((req,resp)=>{
    if(req.url ==="/index"){
        fs.readFile(path.join(__dirname,"web","index.html"),'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
    })
    }
    if(req.url ==="/about"){
        fs.readFile(path.join(__dirname,"web","about.html"),'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
    })
    }
    else{
        fs.readFile(path.join(__dirname,"web","contact.html"),'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
    })
    }
})
server.listen(port,host,(err)=>{
    if(err) throw err
    console.log("Server Running successfully")
})