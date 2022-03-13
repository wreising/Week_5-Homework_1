// function to generate markdown for README

// generate license badge from shields.io
function licenseBadege(license) {
  if (license === 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'BSD 3') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === 'Creative Commons') {
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
  } else if (license === 'GNU GPL') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  return '';
}

// generate license descriptions
function licenseDescription(license) {
  if (license === 'Apache 2.0') {
    return `Under this license, users can: Use the code commercially: Companies can include the licensed code in proprietary software that they then sell to customers.`
  } else if (license === 'BSD 3') {
    return `The BSD 3-clause license allows you almost unlimited freedom with the software so long as you include the BSD copyright and license notice in it (found in Fulltext). You may not use the names of the original company or its members to endorse derived products.`
  } else if (license === 'Creative Commons') {
    return `This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator. The license allows for commercial use.`
  } else if (license === 'GNU GPL') {
    return `The GNU General Public License (GNU, GPL, or GPL) is a free software license which guarantees that users are free to use, share, and modify the software without paying anyone for it.`
  }
  return ''
}

// generate md file
function generateMD(data) {
  return `# README - ${data.title} ${licenseBadege(data.license)}

### By: [${data.name}](#questions)

---

## App Description

${data.description}

---

## Table of Contents
- [Instalation Instructions](#install)
- [Command to Use](#command)
- [Instructions](#instructions)
- [Contribution Guidlines](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

---

## Installation Instructions {#install}

${data.installInstructions}

## Command to use: {#command}

<code>${data.usageCommand}</code>

## Instructions: {#instructions}

${data.instructions}

## Contribution Guidlines {#contribution}

${data.contributionGuidlines}

## Tests {#tests}

${data.tests}

## License: ${data.license} {#license}

>${licenseDescription(data.license)}

---

## Questions: {#questions}

Find the source for this project and more on **[GitHub](https://github.com/${data.gitHubUserName}).**

**[email](${data.email})** me with any further questions.`
}

// export module
module.exports = generateMD;