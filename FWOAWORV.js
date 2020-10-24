var person={name:"Ajil Sathyan",age:22,place:"Panniyode", display:function(){
    console.log(this.name)
}}

//for(x in person){
   // console.log(person[x])
//}
person.name="Sandra"
person.age=19
person.dateofbirth="22-12-2000"
person.displayAge=function(){
  console.log(this.age)
}
console.log(person.displayAge())