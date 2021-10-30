// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Project title:",
    },
    {
        type: "input",
        name: "description",
        message: "Description:: "
    },
    {
        type: "input",
        name: "installation",
        message: "Installation: ",
    },
    {
        type: "input",
        name: "usage",
        message: "Usage:"
    },
    {
        type: "list",
        name: "license",
        message: "Choose license: ",
        choices: [
            "MIT",
            "Open",
            "Academic",
            "Apache",
            "Mozilla",
            "GNU",
            "ISC",
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Contributing:"
    },
    {
        type: "input",
        name: "tests",
        message: "Tests:"
    },
    {
        type: "input",
        name: "questions",
        message: "Questions:"
    },
    {
        type: "input",
        name: "username",
        message: "GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Your email: "
    }
];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    await writeFileAsync(`${fileName}.md`, data);}

// TODO: Create a function to initialize app
async function init() {
    try {
        const data = await inquirer.prompt(questions);
        const markdown = generateMarkdown(data);
        await writeToFile(`${data.title}`, markdown);
    }
    catch (e){
        console.error(e.message);
    }
}

// Function call to initialize app
init().then(() => console.log('README file generated')).catch(() => console.error('Could not initialize application'));
