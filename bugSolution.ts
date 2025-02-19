function greeter(person: string) {
    return "Hello, " + person;
}

function greetMultiple(people: string[]) {
    people.forEach(person => console.log(greeter(person)));
}

let user = ["Jane Doe", "John Smith"];
greetMultiple(user); //Correct!