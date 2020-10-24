var read=require('readline-sync')
num1=read.question("Enter 2 number")
num2=read.question('')
 if(num1>num2){
     console.log(" Larger number is :" +num1)
 }else{
    console.log(" Larger number is :" +num2) 
 }