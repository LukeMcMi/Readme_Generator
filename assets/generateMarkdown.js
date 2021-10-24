// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses) {
  return `# ${userResponses.projectTitle}
  
  ## Description
  ${userResponses.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${userResponses.installation}
  
  ## Usage
  ${userResponses.usage}
  
  ## License
  
  ![badge](https://img.shields.io/badge/license-${userResponses.license}-brightgreen)
  <br />
  This application is covered under the ${userResponses.license} license.

  ## Contributing
  ${userResponses.contributing}

  ## Tests
  ${userResponses.tests}




`;
}

module.exports = generateMarkdown;
