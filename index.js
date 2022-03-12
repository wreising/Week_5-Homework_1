const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./generateMarkdown.js')

// title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

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
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then((data) => fs.writeFileSync('README-Filled.md', generateMD(data)))
    .then(() => console.log('Successfully wrote to README-Filled.md'))
    .catch((err) => console.error(err));
}

// function call to initialize program
init();



// const promptUser = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?',
//     },
//     {
//       type: 'input',
//       name: 'title',
//       message: 'What is the title of your Project?',
//     },
//     {
//       type: 'input',
//       name: 'description',
//       message: 'Describe the Project:',
//     },
//     {
//       type: 'input',
//       name: 'installInstructions',
//       message: 'Describe the installation process:',
//     },
//     {
//       type: 'input',
//       name: 'usageCommand',
//       message: 'What is the command to use the App?',
//     },
//     {
//       type: 'input',
//       name: 'instructions',
//       message: 'Instructions for use:',
//     },
//     {
//       type: 'input',
//       name: 'contributionGuidlines',
//       message: 'What are the Contribution Guidlines?',
//     },
//     {
//       type: 'list',
//       name: 'license',
//       message: 'Choose a license:',
//       choices: ["Apache 2.0", "BSD", "Other"]
//     },
//     {
//       type: 'input',
//       name: 'gitHubUserName',
//       message: 'What is your GitHub username?',
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: 'What is your email address?',
//     },
//   ]);
// };

// function licenseD(license) {
//   if (license == 'Apache 2.0') {
//     licenseDescription = '[Apache 2.0](href = http://apache.org)'
//   } else if (license == 'BSD') {
//     licenseDescription = '[BSD](href = http://bsd.org)'
//   } else {
//     licenseDescription = '[Other](href = http://other.org)'
//   }
// }

// fuction setLicense(license) {
//   if (license === 'Apache 2.0') {
//     licenseDescription = apache
//   }
// }

// const promptUser = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?',
//     },
//     {
//       type: 'input',
//       name: 'title',
//       message: 'What is the title of your Project?',
//     },
//     {
//       type: 'input',
//       name: 'description',
//       message: 'Describe the Project:',
//     },
//     {
//       type: 'input',
//       name: 'installInstructions',
//       message: 'Describe the installation process:',
//     },
//     {
//       type: 'input',
//       name: 'usageCommand',
//       message: 'What is the command to use the App?',
//     },
//     {
//       type: 'input',
//       name: 'instructions',
//       message: 'Instructions for use:',
//     },
//     {
//       type: 'input',
//       name: 'contributionGuidlines',
//       message: 'What are the Contribution Guidlines?',
//     },
//     {
//       type: 'list',
//       name: 'license',
//       message: 'Choose a license:',
//       choices: ["Apache 2.0", "BSD", "Other"]
//     },
//     {
//       type: 'input',
//       name: 'gitHubUserName',
//       message: 'What is your GitHub username?',
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: 'What is your email address?',
//     },
//   ]);
// };
// .this 

// const generateMD = ({ name, title, description, installInstructions, usageCommand, instructions, contributionGuidlines, license, licenseDescription, gitHubUserName, email }) =>
//   `# README - ${title}

// ### [${name}](#questions)

// #### [${license}](#license) License

// ## App Description

// ${description}

// ## Table of Contents
// - [Instalation Instructions](#install)
// - [Command to Use](#command)
// - [Instructions](#instructions)
// - [Contribution Guidlines](#contribution)
// - [License](#license)
// - [Questions](#questions)

// ## Installation Instructions {#install}

// ${installInstructions}

// ## Command to use: {#command}

// <code>${usageCommand}</code>

// ## Instructions: {#instructions}

// ${instructions}

// ## Contribution Guidlines {#contribution}

// ${contributionGuidlines}

// ## License: ${license} {#license}

// ${licenseDescription}

// ## Questions: {#questions}

// Find me on **[GitHub](https://github.com/${gitHubUserName})**

// **[email](${email})** me`


// const init = () => {
//   promptUser()
//     // Use writeFileSync method to use promises instead of a callback function
//     .then((answers) => fs.writeFileSync('README-Filled.md', generateMD(answers)))
//     .then(() => console.log('Successfully wrote to README-Filled.md'))
//     .catch((err) => console.error(err));
// };

// init();

