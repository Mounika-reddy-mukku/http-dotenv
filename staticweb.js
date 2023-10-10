import fs from 'fs'
import http from 'http'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path:"config.env"})

let port = process.env.PORT
let host=process.env.HOST

let server=http.createServer((req,resp)=>{
    console.log(req.url)
    if(req.url == "/index.html"){
        fs.readFile("web/index.html",'utf-8',(err,data)=>{
            if(err) throw err 
            resp.end(data)
        })
    }
    if(req.url == "/about.html"){
        console.log("Test Case 1234")

        fs.readFile("web/about.html",'utf-8',(err,data)=>{
            if(err) throw err 
            resp.end(data)
        })
    }
    else{
        fs.readFile("web/contact.html",'utf-8',(err,data)=>{
            if(err) throw err 
            resp.end(data)
        })
    }

    
})
server.listen(port,host,(err)=>{
    if(err)throw err 
    console.log("Server running ")
})