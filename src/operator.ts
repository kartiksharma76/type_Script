console.log("Arthematic Operators:");

let a : number = 10;
let b : number = 5;
console.log(a + b);
console.log(a - b); // 5  (Subtraction)
console.log(a * b); // 50 (Multiplication)
console.log(a / b); // 2  (Division)
console.log(a % b); // 0  (Modulus)
console.log(a ** b); // 100000 (Power)

// Assignment operators
console.log("Assignment operators:");

let x : number = 10;
x += 5;
x -= 2;
x *= 2;
x /= 2;
x %= 3;
console.log(x);

//Comparison Operators
console.log("Comparison Operators:");

let n1 : number = 10;
let n2 : number = 20;

console.log(n1 == n2);   // false (value check)
console.log(n1 === n2);  // false (type + value check)
console.log(n1 != n2);   // true
console.log(n1 > n2);    // false
console.log(n1 < n2);    // true
console.log(n1 >= 10);   // true
console.log(n2 <= 20);   // true

//Logical Operators
console.log("Logical Operators:");
let age : number = 22;
let hasID : boolean = true;

console.log(age > 18 && hasID);
console.log(age < 18 || hasID);
console.log(!hasID);

//Unary Operators
console.log("Unary Operators:");
let p : number = 5;
p++;
console.log(p);

p--;
console.log(p);

//Ternary Operator
console.log("Ternary Operator:");

let marks:number = 75;
let result =(marks >= 40) ? "Pass" : "Fail";
console.log(result);

//Type Operator (typeof)
console.log("Type Operator (typeof):");
let value: number =100;
console.log(typeof value);

//Nullish Coalescing Operator (??)
console.log("Nullish Coalescing Operator (??):");
let userName : string | null = null;
let displayName = userName ?? "Guest";
console.log(displayName);

//Optional Chaining (?.)
console.log("Optional Chaining (?.):");
type User = {
    name : string;
    address? :{
        city:string;
    };
};

let user : User = {name : "kartik"};
console.log(user.address?.city);


