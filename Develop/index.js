// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//   const Choices = require('inquirer/lib/objects/choices');
// const { rejects } = require('assert');
// const { resolve } = require('path');
// TODO: Create an array of questions for user input
const questions = [
   {
       type: 'input',
       name: 'title',
       message: 'What is the title of your project? (Required)',
       validate: titleInput => {
           if (titleInput){
               return true;
       } else {
            console.log('please eneter your title!');
            return false;
       }
   }
},
{
     type: 'input',
     name: 'githubUsername',
     message: 'What is your GitHub Username? (Required)',
     validate: githubInput => {
         if (githubInput){
             return true;
         } else {
             console.log('Please enter your GitHub Username!');
             return false;
         }
     }
},
{
    type: 'input',
    name: 'email',
    message: 'What is your Email address? (Required)',
    validate: githubInput => {
        if (githubInput){
            return true;
        } else {
            console.log('Please enter your email address!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Enter your project description here: (Required)',
    validate: descriptionInput =>{
        if (descriptionInput) {
            return true;
        } else{
            console.log('It is essential to provide a description of your project.!');
            return false;
        }
    }
}, 
{
    type: 'input',
    name: 'installation',
    message: 'Please provide step-by-step installation instructions for your project. (Required)',
    validate: installInput => {
          if (installInput) {
              return true;
          } else {
              console.log('Please enter your installation instructions!');
              return false;
          }
    }
},
{
    type: 'confirm',
    name: 'confirmLicenses',
    message: 'would you like to include a license? ',
    default: false
},
{
    type: 'list',
    name: 'license',
    message: 'Which license will you use for your project?',
    choices : ['agpl', 'apache', 'mit', 'no license'],
    when: ({ confirmLicenses}) => {
        if (confirmLicenses) {
            return true;
        } else {
            return false;
        }
    } 
},
{
    type: 'confirm',
    name: 'confirmContribute',
    message: 'Would you like to allow other developers to contribute?',
    default: true
},
{
    type: 'input',
    name: 'contribute',
    message: 'Please provide guidelines for contributing. (Required)',
    when: ({ cconfirmContributers }) => {
        if (cconfirmContributers) {
            return true;
        } else {
            return  false;
        }
    },
    validate: contributerInput => {
        if (contributerInput){
            return true;
        } else {
            console.log ('Please enter contributer guidelines!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'test',
    message: 'Please provide instructions on how to test the app. (Required)',
    validate: testInput => {
        if (testInput) {
            return true;
        } else {
            console.log('Please eneter your use test instructions!');
            return false;
        }
     }
}
];


// TODO: Create a function to write README file
const writeToFile = data  => {
    return new Promise((resolve, reject) => {
        fs.writeFile('README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: console.log('File created!')
            });
        })
    })
}

// TODO: Create a function to initialize app
const init = () => {

    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeToFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err =>{
    console.log(err);
})
