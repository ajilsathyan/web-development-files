function Person(name,age,place){
   this.name=name
   this.age=age
   this.place=place
   this.display=function(){
       console.log("Name "+this.name ,"Age "+ this.age , "Place "+this.place)
   }
}

var Ajil_Sathyan=new Person("Ajil Sathyan",22,"charuvilla")
var Sandra=new Person("Sandra",19,"Kulavupara")

Ajil_Sathyan.display()
Sandra.display()