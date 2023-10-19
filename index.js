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
        fs.writeFileSync('README.md', 
        `#Title`
        
        
        
        )
    })
    
}
getInfo()