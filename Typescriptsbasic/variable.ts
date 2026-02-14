// ===============================
// TYPESCRIPT VARIABLE EXAMPLES
// ===============================

// 1. String variable
let userNameExample: string = "Kartik";
console.log("Name:", userNameExample);

// Remove the duplicate userName declaration from app.ts if it exists there

// 2. Number variable
let ageExample: number = 21;
console.log("Age:", ageExample);

// 3. Boolean variable
let isStudentExample: boolean = true;
console.log("Student:", isStudentExample);

// 4. Array variable
let marks: number[] = [80, 90, 75, 85];
console.log("Marks:", marks);

// 5. Object variable
let student: {name: string, age: number} = {
    name: "Kartik",
    age: 21
};
console.log("Student Object:", student);

// 6. Any type variable
let data: any = "Hello";
console.log("Any data:", data);

data = 100;
console.log("Any number:", data);

// 7. Constant variable
const country: string = "India";
console.log("Country:", country);

// 8. Function using variables
function add(a: number, b: number): number {
    return a + b;
}
console.log("Sum:", add(10, 20));

// ===============================
// END OF BASIC TYPESCRIPT
// ===============================
