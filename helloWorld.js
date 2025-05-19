import { log } from "console";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printData() {
    return "Name is " + this.name + " , and age is " + this.age;
  }

  printHelloJava() {
    console.log("Hello JAVA edited hagar");
    console.log("updated");
    console.log("again");
    
  }
}
const ME = new Person("HAGAR", 22);
console.log(ME.printData());
console.log("solved conflict");