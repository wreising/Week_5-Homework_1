const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./generateMarkdown.js')

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your Project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe the Project:',
  },
  {
    type: 'input',
    name: 'installInstructions',
    message: 'Describe the installation process:',
  },
  {
    type: 'input',
    name: 'usageCommand',
    message: 'What is the command to use the App?',
  },
  {
    type: 'input',
    name: 'instructions',
    message: 'Instructions for use:',
  },
  {
    type: 'input',
    name: 'contributionGuidlines',
    message: 'What are the Contribution Guidlines?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the tests?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ["Apache 2.0", "BSD 3", "Creative Commons", "GNU GPL"]
  },
  {
    type: 'input',
    name: 'gitHubUserName',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then((data) => fs.writeFileSync('README-Filled.md', generateMD(data)))
    .then(() => console.log('Successfully wrote to README-Filled.md'))
    .catch((err) => console.error(err));
}

// function call to initialize program
init();