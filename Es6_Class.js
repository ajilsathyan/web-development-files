class Sample{
    sample(){
        console.log("hiiii")
    }
}





class Hello extends Sample{// class
   constructor(num1,num2){  //constructor
    super()
      this.num1=num1
      this.num2=num2
      console.log(num1,num2)
   }
   hello(){ // function or method
      console.log("Hey Friends")
   }
 

}
//object cration and argument passing to the Class "Hello"
let hey=new Hello(12,34)

hey.hello() //object.function call for getting values in hello() function
hey.sample()