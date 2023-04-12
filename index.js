#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import { randomnumber } from "./gamefunctions.js";
//const welcome = async ()=>{
console.log(figlet.textSync("Number Guessing Game"));
for (let i = 0; i < 3; i++) {
    const input = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Guess the number between 0 to 10",
        }
    ]);
    console.log(input);
    const result = randomnumber();
    if (input.num1 === result) {
        console.log(chalk.bgGreen(`Guess is correct and number is ${result}`));
    }
    else if (input.num1 < result) {
        console.log(chalk.bgYellow(`GUess is lesser than answer, increase value.`));
    }
    else if (input.num1 > result) {
        console.log(chalk.bgYellow(`GUess is greater than answer, decrease value.`));
    }
    console.log(`chances left: ${2 - i}`);
}
//};
