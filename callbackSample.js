
//CALLBACK FUNCTIONS

/*function add(num1,num2,callback){
    let err=false 
    if(num1==0){
        err=true
    }
        callback(num1+num2,err)
}
function multiplication(num1,num2,callback){
    callback(num1*num2)
}
function div(num1,num2,callback){
    callback(num1/num2)
}
function minus(num1,num2,callback){
    callback(num1-num2)
}

add(10,10,(sum,err)=>{
    if(err){   
        console.log("First Number is Zero")     
    }else{
        console.log("Sum is :"+sum)
        multiplication(sum,50,(product)=>{   
            console.log("Multiplication is:"+product)
            div(product,sum,(result)=>{
                console.log("Divison is :"+result)
                minus(product,30,(sub)=>{
                    console.log("Subtracted Value is :"+sub)
                })
            })
       })   
    }
})*/



// callback using Promise Hell

const Promise= require('promise')


function add(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
            reject("Error")
        }
        resolve(num1+num2)
    })
}

function multiply(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
            reject("Error")
        }
        resolve(num1*num2)
    })
}

function subtraction(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
            reject("Error")
        }
        resolve(num1-num2)
    })
}

add(40,30).then((sum)=>{
    console.log(sum)
    return multiply(sum,sum)
}).then((product)=>{
    console.log(product)
    return subtraction(product,500)
}).then((sub)=>{
    console.log(sub)
})
.catch((err)=>{
    console.log(err)
})