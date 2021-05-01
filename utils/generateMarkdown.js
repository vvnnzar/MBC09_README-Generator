//Functions to generate user selected license details
function renderLicenseBadge(data) {
  let licenceChoice = data.license[0];
  let selectedLicense = "";
  if (licenceChoice === "MIT") {
    selectedLicense =
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (licenceChoice === "GNU General Public License 2.0") {
    selectedLicense =
      "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg";
  } else if (licenceChoice === "Apache License 2.0") {
    selectedLicense =
      "![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (licenceChoice === "GNU General Public License 3.0") {
    selectedLicense =
      "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (licenceChoice === "BSD 3-Clause") {
    selectedLicense =
      "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
  } else if (licenceChoice === "Mozilla Public License 2.0") {
    selectedLicense =
      "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
  } else {
    selectedLicense = "";
  }
  return selectedLicense;
}

function renderLicenseLink(data) {
  let licenseURL = data.license[0];
  let licenseLink = "";

  if (licenseURL === "MIT") {
    licenseLink = `<a href = "https://opensource.org/licenses/MIT">License Link</a>`;
  } else if (licenseURL === "GNU General Public License 2.0") {
    licenseLink = `<a href = "http://unlicense.org/">License Link</a>`;
  } else if (licenseURL === "Apache License 2.0") {
    licenseLink = `<a href = "https://opensource.org/licenses/Apache-2.0">License Link</a>`;
  } else if (licenseURL === "GNU General Public License 3.0") {
    licenseLink = `<a href = "https://www.gnu.org/licenses/gpl-3.0">License Link</a>`;
  } else if (licenseURL === "BSD 3-Clause") {
    licenseLink = `<a href = "https://opensource.org/licenses/BSD-3-Clause">License Link</a>`;
  } else if (licenseURL === "Mozilla Public License 2.0") {
    licenseLink = `<a href = "https://opensource.org/licenses/MPL-2.0">License Link</a>`;
  } else {
    licenseLink = "";
  }
  return licenseLink;
}

function renderLicenseSection(data) {
  let licenseSection = data.license[0];
  let licenseDetails = "";
  if (licenseSection === "MIT") {
    licenseDetails = `<a href = "https://gist.github.com/ckib16/8732561535ed766cd6b8">MIT Guide</a>`;
  } else if (licenseSection === "GNU General Public License 2.0") {
    licenseDetails = `<a href = "https://gist.github.com/ckib16/8732561535ed766cd6b8">MIT Guide</a>`;
  } else if (licenseSection === "Apache License 2.0") {
    licenseDetails = `<a href = "https://github.com/Medium/opensource/blob/master/apache-license-2.0.md">Apache Guide</a>`;
  } else if (licenseSection === "GNU General Public License 3.0") {
    licenseDetails = `<a href = "https://github.com/TheFox/GPLv3.mdl">GPLv3 Guide</a>`;
  } else if (licenseSection === "BSD 3-Clause") {
    licenseDetails = `<a href = "https://gist.github.com/ckib16/8732561535ed766cd6b8">MIT Guide</a>`;
  } else if (licenseSection === "Mozilla Public License 2.0") {
    licenseDetails = `<a href = "https://gist.github.com/ckib16/8732561535ed766cd6b8">MIT Guide</a>`;
  } else {
    licenseDetails = "Not Available";
  }
  return licenseDetails;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents:
  1. [Project Links](#Links)
  2. [Project Description](#Description)
  3. [Acknowledgements](#Acknowledgments)
  4. [Installation](#Installation)
  5. [Tests](#Tests)
  6. [License](#License)

# Project Links:

# Description:
${data.description}
# Acknowledgments
${data.acknowledgments}
# Installation
${data.installation}
# Tests
${data.tests}
# License
${renderLicenseBadge(data)}
${renderLicenseLink(data)}
${renderLicenseSection(data)}
`;
}

module.exports = generateMarkdown;
