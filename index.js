const inq = require('inquirer')
const fs = require('fs')
// sections
    // description
    // table of contents
    // installation
    // usage
    // license
    // contributing
    // tests
    // questions

// info needed
    // title
    // table of contents
    // description
    // installation instructions
    // usage information
    // contribution guidelines
    // test instructions
    // license
    // github username
    // email address
function chooseLicense(license) {
    let licenseInfo = [
        {
            name: 'CC0 (Creative Commons)',
            info: 
`
The person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law. You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.
`,
            badge: `![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)`
        },
        {
            name: `MIT License`,
            info: 
`
Copyright © 2023

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`,
            badge:`![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
        },
        {
            name: `Attribution License (BY)`,
            info: 
`
You are free:

-To share: To copy, distribute and use the database.
-To create: To produce works from the database.
-To adapt: To modify, transform and build upon the database.

As long as you:

-Attribute: You must attribute any public use of the database, or works produced from the database, in the manner specified in the license. For any use or redistribution of the database, or works produced from it, you must make clear to others the license of the database and keep intact any notices on the original database.
`,
            badge:`![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)`
        },
        {
            name: `Open Database License (OBDl)`,
            info: 
`
You are free:

-To share: To copy, distribute and use the database.
-To create: To produce works from the database.
-To adapt: To modify, transform and build upon the database.

As long as you:

-Attribute: You must attribute any public use of the database, or works produced from the database, in the manner specified in the ODbL. For any use or redistribution of the database, or works produced from it, you must make clear to others the license of the database and keep intact any notices on the original database.
-Share-Alike: If you publicly use any adapted version of this database, or works produced from an adapted database, you must also offer that adapted database under the ODbL.
-Keep open: If you redistribute the database, or an adapted version of it, then you may use technological measures that restrict the work (such as DRM) as long as you also redistribute a version without such measures.
`,
            badge:`![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)`
        }
    ]
    switch(license) {
        case 'CC0 (Creative Commons)': 
            return licenseInfo[0];
        case 'MIT License':
            return licenseInfo[1];
        case 'Attribution License (BY)':
            return licenseInfo[2];
        case 'Open Database License (OBDl)':
            return licenseInfo[3];
    }
}

function getInfo() {
    let answers = inq.prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name:'name'
        },
        {
            type: 'input',
            message: 'Describe your project',
            name:'description'
        },
        {
            type: 'input',
            message: 'How do you install your project?',
            name:'installation'
        },        {
            type: 'input',
            message: 'How do you use your project?',
            name:'usage'
        },
        {
            type: 'input',
            message: 'What guidelines should potential contributors follow?',
            name:'guildlines'
        },
        {
            type: 'input',
            message: 'How should this program be tested?',
            name:'test'
        },
        {
            type: 'list',
            message: 'What License would you like to use for this project',
            name:'license',
            choices: [
                'CC0 (Creative Commons)',
                'MIT License',
                'Attribution License (BY)',
                'Open Database License (OBDl)'
            ]
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name:'username'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name:'email'
        },
        
    ]).then((answers) => {
        let chosenLicense = chooseLicense(answers.license)
        fs.writeFileSync('README.md', 
`
${chosenLicense.badge}

# ${answers.name}

## Description

${answers.description}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.guildlines}

## Tests

${answers.test}

## License

${chosenLicense.name}
${chosenLicense.info}

## Questions

[Github](https://github.com/${answers.username})
Email: ${answers.email}
Please contact me via either of these methods if you have additional questions about this product
            
`        
        )
    })
    
}
getInfo()

