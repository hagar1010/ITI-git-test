class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printData() {
    return "Name is " + this.name + " , and age is " + this.age;
  }
  printHelloJava() {
    console.log("Hello JAVA");
  }

}
const ME = new Person("HAGAR", 22);
console.log(ME.printData());
ME.printHelloJava()
