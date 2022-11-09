// for (let i = 1; i < 11; i++)
// {
//     console.log(2 ** i);
// }
// let exp = 1;
// while (exp <= 10)
// {
//     console.log(2 ** exp);
//     exp += 1
// }


// let user = prompt ("What is your name?:");
// console.log(Number(user));



// let input;
// do {
//     user = prompt ("What is your name?:");
// }  while (!isNaN(Number(user)));
// alert(`Hello ${user}`);

// let fruits =["Apple", "Banana"];
// fruits.push("Orange"); // add item to end of array
// console.log(fruits)

// fruits.pop("Orange"); // removes item from arrray

// fruits.unshift("Mango") //adds item to beginning of array

// fruits.shift() //removes first item at beginning of array and returns value

// const arr = ["a","b","c"]

// arr.push("d")
// console.log(arr.length)
// console.log(arr[3])
// arr.pop()
// console.log(arr.length)
// arr.unshift("1")
// console.log(arr[0])


// const person = {
// name: ["Bob", "Smith"], 
// age:32,
// gender: "male",
// interests: ["Music", "Skiing"]
// }

// console.log(`My name is ${person.name[0]} ${person.name[1]}. I am interested in ${person.interests[0]} and ${person.interests[1]}`);

// for (let key in person) {
//     console.log(person[key])
// }

let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
};

let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
};

let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
};
let students = [student1, student2, student3]; 
let counter = 0;
for (student in students) {
    if (student.program === "CIT" && student.GPA > 3) {counter; console.log(student)
    }
}
console.log(counter); 