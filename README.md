# Recursion

This repo is an exercise to re-implement native JavaScript browser methods using recursion. Recursion is a technique for solving problems wherein a function makes calls to itself. By doing so, it can complete a small amount of the processing, and delegate the rest of the problem to the recursive calls. Recursion can be used on problems where smaller parts of the problem look the same as the larger problem, as a whole.

The tests in this repo are written using [Mocha](https://mochajs.org/), a JavaScript testing framework.

## Installation
[Pomander](https://github.com/hackreactor/precourse-pomander) will check the code for syntax errors and violations against the style guide before each commit. It uses a pre-commit hook to run staged files through ```eslint``` before each commit. ```eslint``` is a linter that will block commits should there be any syntax errors, or, should the style guide be violated. There are some preferred whitespace style rules that will give warnings but not block commits.

The following command is run from within the repository to install Pomander:

```curl -s https://raw.githubusercontent.com/hackreactor/precourse-pomander/master/bin/install | bash```

## Minimum Requirements
- [x] Implement ```getElementsByClassName``` with a new function in ```src/getElementsByClassName.js```, and make the specs pass
- [x] Use ```document.body```, ```element.childNodes```, and ```element.classList```
- [x] Replace ```stringifyJSON``` with a new function in ```src/stringifyJSON.js```, and make the specs pass
 
 
 
