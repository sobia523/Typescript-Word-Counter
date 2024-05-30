#! /usr/bin/env node
// Importing the inquirer and chalk pakages
import inquirer from "inquirer";
import chalk from "chalk";
// Print the wellcome message
console.log(chalk.bold.blueBright("\n \t\t SyedaSobia - Word Counter"));
console.log("------------------------------------------------------------");
// Prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.yellowBright("Enter a Sentence"),
    }
]);
// The sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
// Analysis of user input sentence
console.log("------------------------------------------------------------");
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("===================================================================");
