// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = null;
  if (license === "None") {
    badge = '';
  }
  else if (license === 'MIT License') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = null;
  if (license === "None") {
    link = '';
  }
  else if (license === 'MIT License') {
    link = 'https://opensource.org/licenses/MIT';
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge(license);
  renderLicenseLink(license);

  let section = null;

  if (license === 'None') {
    section = '';
  }
  else if (license === 'MIT License') {
    section = badge.concat(link);
  }
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = null;
  if (data.license === "None") {
    badge = '';
  }
  else if (data.license === 'MIT License') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }

  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${badge}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, please contact me via [GitHub](https://github.com/${data.gitHubUN}) or [email](mailto:${data.email}).
`;
}

export default generateMarkdown;
