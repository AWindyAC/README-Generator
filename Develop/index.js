// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);
// Prompts the user to select the employee type
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            default: 'README Generator'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe the functionality of your project',
            default: 'Dynanimcally generates professional README files.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your project?',
            default: 'Clone the repository and run node index.js in the terminal.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your project?',
            default: 'npm start in the terminal.'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How do you contribute to your project?',
            default: 'Reach out via email.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions for your project?',
            default: 'npm test'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is the license for your project?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3']
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your github username?',
            default: 'AWindyAC'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            default: 'fowlkes.wendell@gmail.com'
        },
    ]);
};
// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('README file created successfully!');
    });
};
// Function to initialize program
function init() {
    promptUser().then((data) => {
        return generateMarkdown(data);
        })
        .then((markdown) => {
            return writeToFile('README.md', markdown);
        })
            .catch((err) => {
                console.log(err);
    });
};
// Function call to initialize program
init();

