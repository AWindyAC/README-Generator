// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);
// Prompts the user to select the employee type
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe the functionality of your project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your project?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How do you contribute to your project?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions for your project?'
        },
    ]);
};