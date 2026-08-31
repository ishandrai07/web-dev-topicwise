class Animal{
    constructor(name){
        console.log("constructor called");
        this.name = name;
    }
    eats(){
        console.log("Animal eats");
    }

    jumps(){
        console.log("Animal jumps");
    }
}

class Lion extends Animal{
    age(age){
        console.log("Lion age is: " + age);
    }
    // method overriding
    eats(){
        super.jumps(); // calling parent class method
        console.log("Lion eats");
    }
}

// let a = new Animal("dog");
// console.log(a.name);
// a.eats();
// a.jumps();

let l = new Lion("simba");
console.log(l.name);
l.age(7);
l.eats();