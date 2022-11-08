for (let i = 1; i < 11; i++)
{
    console.log(2 ** i);
}
let exp = 1;
while (exp <= 10)
{
    console.log(2 ** exp);
    exp += 1
}


let user = prompt ("What is your name?:");
console.log(Number(user));



let input;
do {
    user = prompt ("What is your name?:");
}  while (!isNaN(Number(user)));
alert(`Hello ${user}`);