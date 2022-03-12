// function to generate markdown for README


let a = data.license

if (a == 'Apache 2.0') {
  licenseDescription = 'Apache description'
} else {
  licenseDescription = 'three'
}


function generateMD(data) {
  return `# README - ${data.title}

### [${data.name}](#questions)

#### [${data.license}](#license) License

## App Description

${data.description}

## Table of Contents
- [Instalation Instructions](#install)
- [Command to Use](#command)
- [Instructions](#instructions)
- [Contribution Guidlines](#contribution)
- [License](#license)
- [Questions](#questions)

## Installation Instructions {#install}

${data.installInstructions}

## Command to use: {#command}

<code>${data.usageCommand}</code>

## Instructions: {#instructions}

${data.instructions}

## Contribution Guidlines {#contribution}

${data.contributionGuidlines}

## License: ${data.license} {#license}

${licenseDescription}

## Questions: {#questions}

Find me on **[GitHub](https://github.com/${data.gitHubUserName})**

**[email](${data.email})** me`
}

module.exports = generateMD;