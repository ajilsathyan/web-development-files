/*var dt=new Date()
console.log("This is starting")
for(i=0;i<1000;i++){
    console.log("Sandra I LOVE You")
}
console.log("This is End")
var Dt=new Date()-dt
console.log(Dt)*/

function longTask(milliseconds){
    dt=new Date()
    while((Dt=new Date() -dt) <=milliseconds){
        //console.log("MY Mighty LORD ")
    }

}

function showEnd(){
    console.log("END")
}
console.log("Processing Started")
setTimeout(showEnd,2000)


console.log("Processing Started")
setTimeout(showEnd,2000)

console.log("Processing Started")
setTimeout(showEnd,2000)



var data=function(Data){
    console.log("Data: "+Data)
}

var sample=function(callback){
      callback("Crossroads")
}

sample(data)