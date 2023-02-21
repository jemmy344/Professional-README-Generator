const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];
const promptUser = () => {
    return inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license would you like to use for your project?',
      choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can other developers contribute to your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How can users test your project?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ])

};
// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    promptUser().then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile("README.md", markdown);
        });

}

// function call to initialize program
init();
