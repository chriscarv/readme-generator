// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the name of your project? ',
        validate: value => {if(value){return true;} else{console.log('what is the name of your project');}}
    },
    {
        type: 'input',
        name: 'why',
        message: 'why did you build this project?',
        validate: value => {if(value){return true;} else{console.log('why did you build this project?');}}
    },
    {
        type: 'input',
        name: 'what',
        message: 'what does this project do?',
        validate: value => {if(value){return true;} else{console.log('what does this project do?');}}
    },
    {
        type: 'input',
        name: 'how',
        message: 'what did you use to build this project?',
        validate: value => {if(value){return true;} else{console.log('what did you use to build this project');}}
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running',
        validate: value => {if(value){return true;} else{console.log('What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.');}}
    },
    {
        type: 'list',
        name: 'license',
        message: 'chose a license: ',
        choices: ['mit', 'apache','isc', 'none']
    },
    {
        type: 'input',
        name: 'github',
        message: 'enter your github user name',
        validate: value => {if(value){return true;}else{console.log('enter your github user name');}}
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter your email address',
        validate: value => {if(value){return true;}else{console.log('enter your email address');}}
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}-README.md`, data,(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file generated');
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(answer => generateMarkdown(answer))
.then(readMeFile => writeToFile("readme", readMeFile))
.catch(err => {
    console.log(err);
});
