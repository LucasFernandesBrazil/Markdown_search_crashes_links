#!/usr/bin/env node

import chalk from 'chalk';
import getFile from './index.js';
import validateURLs from './http-validate.js';

const path = process.argv;

async function processText(path) {
    try{
        const result = await getFile(path[2]);
        if (path[3] === 'validate'){
            console.log(chalk.yellow('Validate links'), await validateURLs(result));
        }
    } catch(err) {
        console.log(err);
    }
}

processText(path);