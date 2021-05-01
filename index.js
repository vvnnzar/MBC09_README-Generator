const inquirer = require("inquirer");
const fs = require("fs");
const generateMd = require("./utils/generateMarkdown");
// Prompt questions array
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },

  {
    type: "input",
    message: "Briefly describe what your project is about",
    name: "description",
  },
  {
    type: "input",
    message: "List any references that influenced your project development",
    name: "acknowledgments",
  },
  {
    type: "input",
    message: "List any technology required to support your project?",
    name: "prerequisites",
  },
  {
    type: "input",
    message: "Describe how your application can be installed?",
    name: "installation",
  },
  {
    type: "input",
    message: "What unit tests should be taken to verify your project?",
    name: "tests",
  },
  {
    type: "checkbox",
    message: "Select an appropriate license, if any, for your project?",
    choices: [
      "MIT",
      "GNU General Public License 2.0",
      "Apache License 2.0",
      "GNU General Public License 3.0",
      "BSD 3-Clause",
      "Mozilla Public License 2.0",
    ],
    name: "license",
  },
];

//Write data to README file
function writeToFile(fileName, data) {
  fs.writeFile("./" + fileName, data, (err) => {
    if (err) {
      return console.error(err);
    } else {
      console.log("README successfully generated");
    }
  });
}

//Application initialisation
function init() {
  inquirer.prompt(questions).then(function (info) {
    writeToFile("README.md", generateMd(info));
  });
}
init();
