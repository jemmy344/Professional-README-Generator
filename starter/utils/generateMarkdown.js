function generateMarkdown(data) {
  return `
# ${data.title}

${generateDescription(data.description)}
${generateTableOfContents()}
${generateInstallation(data.installation)}
${generateUsage(data.usage)}
${generateLicense(data.license)}
${generateContributing(data.contributing)}
${generateTests(data.tests)}
${generateQuestions(data.github, data.email)}
`;
}

function generateDescription(description) {
  return `## Description\n\n${description}\n`;
}

function generateTableOfContents() {
  return `## Table of Contents\n
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)\n`;
}

function generateInstallation(installation) {
  return `## Installation\n\n${installation}\n`;
}

function generateUsage(usage) {
  return `## Usage\n\n${usage}\n`;
}

function generateLicense(license) {
  return `## License\n\n${license}\n`;
}

function generateContributing(contributing) {
  return `## Contributing\n\n${contributing}\n`;
}

function generateTests(tests) {
  return `## Tests\n\n${tests}\n`;
}

function generateQuestions(github, email) {
  return `## Questions\n
If you have any questions, please feel free to contact me via GitHub or email:
- GitHub: [${github}](https://github.com/${github})
- Email: [${email}](mailto:${email})\n`;
}

module.exports = generateMarkdown;
