// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    'What is the title?',
    'What is the description?',
    'What are the installation instructions?',
    'What is the usage information?',
    'What is the license?',
    'What are the contributing guidelines?',
    'What are the test instructions?',
    'What is your GitHub username?',
    'What is your email addresss?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, content) {
    fs.writeFile(filename, content,
        (err) => err ? console.error(err) : console.log(`${filename} created!`)
    )
}

const generateReadMe = () => {

};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            { // 0
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            { // 1
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            { //2
                type: 'input',
                message: questions[2],
                name: 'installation',
            },
            { // 3
                type: 'input',
                message: questions[3],
                name: 'usage',
            },
            { // 4
                type: 'list',
                message: questions[4],
                choices: ['choice1', 'choice2', 'choice3', 'choice4'],
                name: 'license',
            },
            { // 5
                type: 'input',
                message: questions[5],
                name: 'contributing',
            },
            { // 6
                type: 'input',
                message: questions[6],
                name: 'test',
            },
            { // 7
                type: 'input',
                message: questions[7],
                name: 'gitHubUN',
            },
            { // 8
                type: 'input',
                message: questions[8],
                name: 'email',
            },
        ])
    .then((responses) => {
        const readMeContent = generateReadMe(responses);
        writeToFile('TESTME.md', readMeContent);
    })
}

// Function call to initialize app
init();
