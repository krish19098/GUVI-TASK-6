//Write a “person” class to hold all the details.
class Person {
    constructor(first_name, last_name, age, address, email) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.address = address;
        this.email = email;
    }

    getFullName() {
        return `${this.first_name} ${this.last_name}`;
    }

    getDetails() {
        return `Name: ${this.getFullName()}\nAge: ${this.age}\nAddress: ${this.address}\nEmail: ${this.email}`;
    }
}

const detail = new Person("Gokul", "Krish", 25, "East coast Street, Chennai City", "gk1481998@gmail.com");
console.log(detail.getDetails());
console.log(detail.getFullName());