const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js')

// title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

const promptUser = () => {
  return inquirer.prompt([
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
      name: 'usageInstructions',
      message: 'How is the Project used?',
    },
    {
      type: 'input',
      name: 'contributionGuidlines',
      message: 'What are the Contribution Guidlines?',
    },
    {
      type: 'input',
      name: 'testInstructions',
      message: 'Describe the Test Instructions:',
    },
    {
      type: 'input',
      name: 'contributionGuidlines',
      message: 'What are the Contribution Guidlines?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a liceense:',
      choices: ["Apache 2.0", "BSD", "Other"]
    },
    {
      type: 'input',
      name: 'gitHubUserName',
      message: 'What is your GitHub username?',
    },
  ]);
};

const generateMD = ({ name, title, description, installInstructions, usageInstructions, contributionGuidlines, license, gitHubUserName }) =>
  `# README
# ${title}
### ${name}

## Description

${description}

## Installation Instructions

${installInstructions}

## Usage Instructions

${usageInstructions}

## Contribution Guidlines

${contributionGuidlines}

## License: href=${license}

## Questions: https://github.com/${gitHubUserName}`

// const generateHTML = ({ name, title, description, installInstructions, usageInstructions, contributionGuidlines, license, gitHubUserName }) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1>${title}</h1>
//     <p> Hello, my name is ${name} and this is my Project.</p>
//     <h2>Project Description:</h2>
//     <p>${description}</p>
//     <h2>Installation Instructions:</h2>
//     <p>${installInstructions}</p>
//     <h2>Usage Instructions:</h2>
//     <p>${usageInstructions}</p>
//     <h2>Contribution Guidlines</h2>
//     <p>${contributionGuidlines}</p>
//     <h3>License: ${license}</h3>
//     <h2>Questions:</h2>
//     <p>GitHub: https://github.com/${gitHubUserName}</p>
//   </div>
// </div>
// </body>
// </html>`;

// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README-Filled.md', generateMD(answers)))
    .then(() => console.log('Successfully wrote to README-Filled.md'))
    .catch((err) => console.error(err));
};

init();

// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
