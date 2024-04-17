#! /usr/bin/env node
// Import the 'inquirer' module is a commad line interface for node.js
import inquirer from "inquirer"

// Declare a const 'answers' and assign it to the result of inquiere.prompt function

const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name:"Sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }

])

const words = answers.Sentence.trim().split( " ")

// Print the array of words to console
console.log(words)

// Print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);

