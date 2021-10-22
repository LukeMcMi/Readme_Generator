// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadMe = require("./utils/generateMarkdown.jss")
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief Description of your project: ",
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process if any: ",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the project going to be used for?",
    },
    {
        type: "list",
        name: "licence",
        message: "Choose the appropriate licence for the project: ",
        choices: [
            "Apache",
            "Academic",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "How can other developers can contribute to your project?",
    },
    {
        type: "input",
        name: "tests",
        message: "Are any tests included?",
    },
    {
        type: "input",
        name: "questions",
        message: "What to do if there are issues?",
    },
    {
        type: "input",
        name: "username",
        message: "Please provide your GitHub username: ",
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email: ",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('✔️  Successfully wrote to README.md')
    });
}


// TODO: Create a function to initialize app
async function init() {
    try {
        // Prompt inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank's for your responses! Fetching your GitHub data....");

        // calling GitHub api for user data
        const userInfo = await fs.appendFile.getUser(userResponses);
        console.log("Your GitHub user information: ", userInfo);

        // Pass user responses and info to generateMarkdown
        console.log("Generating your README.....")
        const markdown = generateReadMe(userResponses, userInfo);
        console.log(markdown);

        // write markdown to file
        await writeFileAsync("ExampleREADME.md", markdown);

    // Log error
    } catch (error) {
        console.log(error);
    }

}

// Function call to initialize app
init();
