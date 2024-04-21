#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentebce To Count Words:"
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`Your Sentence Word Count is ${words.length}`);
