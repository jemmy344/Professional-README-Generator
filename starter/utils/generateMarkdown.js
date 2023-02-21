// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
  ${generateDescription(data.description)}
`;
}

module.exports = generateMarkdown;
