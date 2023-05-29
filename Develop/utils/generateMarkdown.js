//Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

//Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

//Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

//Function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
  
  // Generate Table of Contents conditionally based on userResponses
  
  let TableOfContents = `## Table of Contents`;

  if (userResponses.installation !== '') { TableOfContents += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { TableOfContents += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { TableOfContents += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') { TableOfContents += `
  * [Tests](#tests)` };


  //Making the title
  let MarkDownText = 
  `# ${userResponses.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  ## Description 
  ${userResponses.description}
  
  `
  MarkDownText += TableOfContents;
 

  MarkDownText += `
  * [License](#license)`;
  
  if (userResponses.installation !== '') {
  
  MarkDownText +=
  `
  
  ## Installation
  
  *This is how you can get the project running for you*
  
  ${userResponses.installation}`
  };
  
  if (userResponses.usage !== '') {
  
  MarkDownText +=
  
  `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${userResponses.usage}`
  };
  
  if (userResponses.contribution !== '') {

  MarkDownText +=
    
  `
  
  ## Contributing
  
  *If you would like to contribute, instructions are below*
  
  ${userResponses.contribution}`
  };
  

  // Optional Tests section
  if (userResponses.tests !== '') {
  
  MarkDownText +=
  `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${userResponses.tests}`
  };

  MarkDownText +=
  `
  
  ## License
  
  ${userResponses.license}
  `;

  let devInfo = 
  `
  ---
  
  ## Questions?
  `;

  //Dev Info
  if (userResponses.email !== null) {
  
  devInfo +=
  `
  Email: ${userResponses.email}
  `};

  MarkDownText += devInfo;

  return MarkDownText;
  
}

module.exports = generateMarkdown;