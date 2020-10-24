const express=require('express')
const path=require('path')
const url=require('url')


const app=express()


app.use(function(req,res,next){
    console.log("Start")
    next()
})

app.get('/signup',function(req,res,next){
    
    res.sendFile(path.join(__dirname,'signup.html'))
    console.log("Middle")
    next()



   })
app.use(function(req,res){
    console.log("End")

   })

 app.post('/signup',function(req,res){
   res.post('Account Created')
    
 })  
 


app.get('/about',(req,res)=> res.send("This is My Second Page"))


app.listen(4000,function(){
    console.log("Server Started") 
   /*console.log(__filename)*/}
)