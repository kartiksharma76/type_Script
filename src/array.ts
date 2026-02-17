// ===============================
// TypeScript Arrays - All in One
// ===============================

// 1️. Basic Array Syntax
let numbers: number[] = [10, 20, 30, 40];
let name: string[] = ["Kartik", "Rahul", "Aman"];

console.log("Numbers:", numbers);
console.log("Names:", name);


// 2️. Using Generic Array Syntax
let marks: Array<number> = [85, 90, 95];
let city: Array<string> = ["Bhopal", "Delhi", "Bangalore"];

console.log("Marks:", marks);
console.log("Cities:", city);


// 3️. Mixed Type Array (Union Type)
let data: (string | number)[] = ["Kartik", 21, "Engineer", 2026];
console.log("Mixed Data:", data);


// 4️.Access Array Elements
let fruits: string[] = ["Apple", "Mango", "Banana"];

console.log("First fruit:", fruits[0]);
console.log("Third fruit:", fruits[2]);


// 5️.Array Methods
let arr: number[] = [1, 2, 3];

arr.push(4);      // add at end
arr.pop();        // remove last
arr.shift();      // remove first
arr.unshift(0);   // add at start

console.log("Updated Array:", arr);


// 6️. Readonly Array (cannot modify)
let values: readonly number[] = [10, 20, 30];
console.log("Readonly Array:", values);
// values.push(40); X Not allowed


// 7️.Loop through Array
let nums: number[] = [10, 20, 30];

console.log("Loop Output:");
for (let n of nums) {
    console.log(n);
}
