// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for your project:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Include any contribution guidelines here:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the instructions for running tests?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select your license:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function generateReadme(answers) {
    const { 
        projectTitle, 
        description, 
        installation, 
        usage, 
        contributing, 
        tests, 
        license, 
        githubUsername, 
        email 
    } = answers;

    const licenseBadge = license !== 'None' ? `![License](https://img.shields.io/badge/license-${license}-blue.svg)` : '';

    const tocLinks = `
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [License](#license)
    - [Contact](#contact)`;

    let readmeContent = `

    # ${projectTitle}
    ${licenseBadge}

    ## Table of Contents
    ${tocLinks}

    ## Description
    ${description}

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## Contributing
    ${contributing}

    ## Tests
    ${tests}

    ## License
    This project is licensed under the ${license} license.

    ## Contact
    - GitHub: [${githubUsername}](https://github.com/${githubUsername})
    - Email: [${email}](mailto:${email})`;

    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) {
            console.error('Error writing README file:', err);
        } else {
            console.log('README.md has been created successfully!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        generateReadme(answers); 
      })
      .catch((err) => {
        console.error('Error initializing app:', err);
      });
}

// Function call to initialize app
init();