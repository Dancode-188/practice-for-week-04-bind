// Your code here
class Employee {
    constructor(name, ocuupation) {
        this.name = name;
        this.occupation = ocuupation;
    }

    sayName(){
        console.log(`${this.name} says hello`);
    }

    sayOccupation(){
        console.log(`${this.name} is a ${this.occupation}`);
    }

}

module.exports = Employee;