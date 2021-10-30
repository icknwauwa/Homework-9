// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license ? `![badge](${renderLicenseLink(license)})` : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license ? `https://img.shields.io/badge/license-${license}-brightgreen` : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
## License
${renderLicenseBadge(license)}
<br/>
This application is covered under ${license} license.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${data.title ? `# ${data.title}` : ''}

${data.license ? `# ${renderLicenseBadge(data.license)}` : ''}

${data.description ? `
## Description
${data.description}
` : ''}

## Table of Contents
${data.installation ? `- [Installation](#installation)` : ''}
${data.usage ? `- [Usage](#usage)` : ''}
${data.license ? `- [License](#license)` : ''}
${data.contributing ? `- [Contributing](#contributing)` : ''}
${data.tests ? `- [Tests](#tests)` : ''}
${data.questions ? `- [Questions](#questions)` : ''}

${data.installation ? `
## Installation
${data.installation}
` : ''}

${data.usage ? `
## Usage
${data.usage}
` : ''}

${data.license ? `
${renderLicenseSection(data.license)}
` : ''}

${data.contributing ? `
## Contributing
${data.contributing}
` : ''}

${data.tests ? `
## Tests
${data.tests}
` : ''}

${data.questions ? `
## Questions
${data.questions}
` : ''}

${data.username ? `
Find me on GitHub: [${data.username}](https://github.com/${data.username}) <br/>
` : ''}

${data.email ? `
Email me with any questions: ${data.email} <br/> 
` : ''}
`;
}

module.exports = generateMarkdown;
