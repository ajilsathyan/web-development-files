const { resolve, reject } = require('promise')
const Promise = require('promise')

function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Ajil Sathyan")
        },2000)
    })
}
function getContact(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("+91 9633228145")
        },2000)
    })
}
/*
Promise.all([getName(),getContact()]).then((result)=>{
    console.log(result)
})*/

 async function getDetails(){ //Await function
     let name=await getName()
     console.log(name)
     let contact=await getContact()
     console.log(contact)
}

getDetails()