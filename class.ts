class Person {  
    name: string;
    age: number;
      
    constructor(name:string, age:number)
        {
            this.name = name;
            this.age = age;  
        } 
         eat() {  
              console.log(`What's for dinner?`); 
               } 
         speak() {  
              console.log(`My name is ${this.name}, I am ${this.age} years old`); 
                 }
    }