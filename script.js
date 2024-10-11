//complete this code
class Person {
    constructor(name, age) {
        this._name = name; // Use a private variable to store the name
        this._age = age;   // Use a private variable to store the age
    }

    get name() {
        return this._name; // Getter for name
    }

    set age(age) {
        this._age = age; // Setter for age
    }

    get age() {
        return this._age; // Getter for age (optional, but useful)
    }
}

class Student extends Person {
    study() {
        console.log(`${this.name} is studying`); // Method to log studying message
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`); // Method to log teaching message
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
