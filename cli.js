import chalk from 'chalk';
import getFile from './index.js'

const path = process.argv;

async function processaTexto(path) {
    try{
        const resultado = await getFile(path[2]);
        console.log(chalk.yellow('Lista de links'), resultado)
    } catch(err) {
        console.log(err)
    }
}

processaTexto(path)