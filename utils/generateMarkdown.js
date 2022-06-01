// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'none'){
    return ' ';
  } else {
    return `![badmath](https://img.shields.io/badge/license-${license}-9cf)
    `
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'none'){
    return ' ';
  } else{
    return `
    [${license}](https://choosealicense.com/licenses/${license})`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'none'){
    return 'no license used ';
  } else {
    return `this project uses the ${renderLicenseLink(license)} license 
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  ## Description
 ${data.description}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  [github](https://github.com/${data.github})
  
  for further questions contact ${data.email}


`;
}

module.exports = generateMarkdown;
