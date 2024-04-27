#!/usr/bin/env node
import inquirer from "inquirer";
console.log(" Welcome to the word counter!!");
let answer = await inquirer.prompt([
    {
        name: "sentence",
        message: "Enter your sentence",
        type: "input"
    }
]);
let words = answer.sentence.trim().split(" "); // splite me jo space diya h iska mtlb he [] me sb words ko (,) laga kr present kare
console.log(words);
// trim() for removing white space
console.log(`Your sentences count is: ${words.length}`); //jb console me message ke sath koe or condition bhe lagane ho to (``) ka use karte hen
