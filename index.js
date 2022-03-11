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
    // {
    //   type: 'input',
    //   name: 'testInstructions',
    //   message: 'Describe the Test Instructions:',
    // },
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
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ]);
};

const licenseDescription = "link to description"

let licenseSeleted = {
  if(license == 'Apache 2.0') {
    licenseSeleted = '['Apache 2.0'](href = http://apache.org)'
} else if (license == 'BSD') {
  licenseSelected = '[BSD](href = http://bsd.org)'
} else {
  licenseSelected = '[Other](href = http://other.org)'
}
}

const generateMD = ({ name, title, description, installInstructions, usageInstructions, contributionGuidlines, license, gitHubUserName, email }) =>
  `# README
# ${title}
### ${name}
#### ${license}

## Description

${description}

## Table of Contents
### Instalation Instructions
### Usage Instructions
### Contribution Guidlines
### Questions

## Installation Instructions

${installInstructions}

## Usage Instructions

${usageInstructions}

## Contribution Guidlines

${contributionGuidlines}

## License: ${licenseSelected}

${licenseDescription}

## Questions:

https://github.com/${gitHubUserName}

${email}`



const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README-${title}.md', generateMD(answers)))
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
