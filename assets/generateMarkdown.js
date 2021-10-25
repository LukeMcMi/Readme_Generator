// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses) {
  return `# ${userResponses.projectTitle}

  ![badge](https://img.shields.io/badge/license-${userResponses.license}-brightgreen)
  
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

  ## Questions
  ${userResponses.questions}
  
  Find me on GitHub: [${userResponses.username}](https://github.com/${userResponses.username})
  
  Email me if you have any questions: ${userResponses.email}

`;
}

module.exports = generateMarkdown;
