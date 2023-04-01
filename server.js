
const express= require('express')
const path=require('path');
const app= express();
const port=3000;

const cssLoadTime=10000;
const jsLoadTime=0;

const wait=(timeout, fn)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(fn())
        }, timeout)

    })
}

app.get("/style.css" ,async (req,res)=>{
   await wait(cssLoadTime,()=>{
        res.sendFile(path.resolve(__dirname+'/style.css'));
    })
})

app.get("/script.js" , async (req,res)=>{
   await wait(jsLoadTime,()=>{
        res.sendFile(path.resolve(__dirname+'/script.js'))
    })
})

app.get("/", (req,res)=>{

    console.log((__dirname))
    res.sendFile(path.resolve(__dirname+'/index.html'))
})

app.listen(port,()=>{
    console.log(`app started on port ${port}` )
})