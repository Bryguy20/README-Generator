// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderContributingSection(confirmContributers, data) {
  if (!confirmContributers) {
      return ` 
      Thnak you for your interest in helping out; however, I will not be accepting contributions from third parties.
      `;
  } else {
      return `
      ${data}
      `;
  }
}
function renderLicenseBadge(license) { 
  if (!license) {
  return``;
}else{
  return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return`![license](https://img.shields.io/badge/license-${license})`
  }
  if (license ==='Apache'){
    return `[${License}(https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === 'CC--0') {
    return `https://creativecommons.org/license/by-nd/4.0`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license'){
    return `
    ## [License](#table-of-contents)
    
    the application is covered under the following license:
    
    ${renderLicenseLink(license)}
    `;
  } else {
    return '';
  }
}

function renderLicenseTOC(license) {
  if (license !== 'no license') {
    return`
    *[License](#license)
    `;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)
  
  ##Description
  ${data.description}

  ## [Installation](#table-of-contents)
  ${data.installation}

  ## [Usage](#table-of-contents)
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.usage}
  
  ${renderContributingSection(data.confirmContributers, data.contribute)}
  ## [Tests](#table-of-contents)
  ${data.test}

  ## [Questions](#table-of-contents)
  Please contact me using the following links:
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})

  ## Credits
  ${data.name}
`;
}

module.exports = generateMarkdown;
