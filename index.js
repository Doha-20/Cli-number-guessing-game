#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to CodeWithDoha - CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "Enter your guess number(Number limit 1 to 5):",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulation ! you guess a correct number.");
}
else {
    console.log("sorry,your guess a wrong number.");
}
