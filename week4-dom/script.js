// class Car {
//     constructor(brand, year){
//     this.brand = brand
//     this.year = year
//     }

//     honk() {
//         console.log("Beep")
//     }
// }

// const car1 = new Car("Audi", 2026)
// const car2 = new Car("BMW", 2005)

// car1.honk();
// car2.honk();

// console.log(car1.brand, car1.year);
// console.log(car2.brand, car2.year);

// class Phone {
//     constructor(brand, battery){
//         this.brand = brand
//         this.battery = battery
//     }

//     call() {
//         console.log("Calling...")
//     }
// }

// const phone1 = new Phone("Apple", "Li-ion");
// const phone2 = new Phone("Samsung", "Li-ion");

// phone1.call();
// phone2.call();

// console.log(phone1.brand, phone1.battery);
// console.log(phone2.brand, phone2.battery);

// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }

//     greet() {
//         console.log("Hello there!")
//     }
// }

// const person1 = new Person("Shirin", 13);
// const person2 = new Person("Laylo", 11);

// person1.greet();
// person2.greet();

// console.log(person1.name, person1.age);
// console.log(person2.name, person2.age);

// class Animal {
//     constructor(name){
//         this.name = name
//     }

//     eat() {
//         console.log("Eating...")
//     }
// }

// class Dog extends Animal {
//     constructor(name){
//         super(name)
//     }

//     bark() {
//         console.log("Woof")
//     }
// }

// const dog1 = new Dog("Billy")
 
// dog1.eat()
// dog1.bark()

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     speak() {
//         console.log("Hello, how are you?")
//     }
// }

// class Student extends Person {
//     constructor(name, age, subject) {
//         super(name, age)
//         this.subject = subject
//     }

//     study() {
//         console.log("Studying...")
//     }
// }

// const s1 = new Student("Shirin", 13, "Maths")

// s1.study();
// s1.speak();

// console.log(s1.name, s1.age, s1.subject);

// class GraduateStudent extends Student {
//     constructor(name, age, subject, thesisTopic) {
//         super(name, age, subject)
//         this.thesisTopic = thesisTopic
//     }

//     research() {
//         console.log("Researching thesis...")
//     }
// }

// const grad1 = new GraduateStudent("Sherzod", 42, "ICT", "Programming")

// grad1.speak()
// grad1.study()
// grad1.research()

// console.log(grad1.name, grad1.age, grad1.subject, grad1.thesisTopic)

// class Item {
//     constructor(title, year) {
//         this.title = title
//         this.year = year
//     }

//     describe() {
//         console.log("This item exists.")
//     }
// }

// class Book extends Item {
//     constructor(title, year, author) {
//         super(title, year)
//         this.author = author
//     }

//     read() {
//         console.log("Reading book...")
//     }
// }

// class EBook extends Book {
//     constructor(title, year, author, filesize) {
//         super(title, year, author)
//         this.filesize = filesize
//     }

//     download() {
//         console.log("Downloading ebook...")
//     }
// }

// const ebook1 = new EBook("The Idiot", 1880, "F. Dostoyevsky", 400)

// ebook1.describe()
// ebook1.read()
// ebook1.download()

// const title = document.getElementById("title")
// const notes = document.getElementsByClassName("note")
// const button = document.getElementById("btn")

// title.textContent = "Welcome!"

// title.innerHTML = "<b>Hi there!</b>"

// title.style.color = "red"
// title.style.fontSize = "40px"

