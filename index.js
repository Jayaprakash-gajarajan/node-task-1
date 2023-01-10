import { MongoClient } from "mongodb";
import express from "express";
import * as dotenv from "dotenv";
import { request } from "http";
import fs from 'fs'

console.log("Mongo is connected !!!");
const app=express();
 dotenv.config();
 app.use(express.json());
const PORT = process.env.PORT;
const MONGO_URL =process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL); // dail
await client.connect(); // call


let dt=new Date();
let date=('0'+dt.getDate()).slice(-2);
let month=('0'+(dt.getMonth() +1)).slice(-2);
let year=dt.getFullYear();
let hours=dt.getHours();
let minutes=dt.getMinutes();
let second=dt.getSeconds();
let output=`Year:${year},Month:${month},Date:${date},Hours:${minutes},Seconds:${second}`;

     fs.writeFile(`./current-timeStamp/current-time-date.txt`,` the URL is:(http://localhost:4000/date)  Time:${output}`,(err)=>{
                   console.log(`complete writing `)
             })
// var k=4;
// for(var i=0;i<k;i++){
//    fs.writeFile(`./Text-Folder/hello.html${i}`,`this is prakash${i}`,(err)=>{
//                  console.log(`complete writing hello${i}.html`)
//            })
//         }
app.get("/",(request,response)=>{
    response.send("HELLO🙋❤️👩‍💻")
})
app.get("/date",(request,response)=>{
  response.send(output);
})

//just i am trying 

// app.post("/myfile",async(request,response)=>{
//     // const data=request.body;
//     const file=await client.db("test").collection("date").insertMany(data);
//     response.send(file)
//   })
//   app.get("/myfile",async(request,response)=>{
//     const file=await client.db("test").collection("myfile").find({}).toArray();
//     response.send(file)
//   })


app.listen(PORT, () => console.log(`the server started in:${PORT}`));