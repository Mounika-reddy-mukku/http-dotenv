const dotenv=require('dotenv')
dotenv.config({path:"config.env"})
let port=process.env.PORT
let host=process.env.HOST
console.log(port) //888
console.log(host) //8080