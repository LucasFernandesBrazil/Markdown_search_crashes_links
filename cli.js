import chalk from 'chalk';
import getFile from './index.js';
import validaURLs from './http-validacao.js';

const path = process.argv;

async function processaTexto(path) {
    try{
        const resultado = await getFile(path[2]);
        if (path[3] === 'validar'){
            console.log(chalk.yellow('Links validados'), validaURLs(resultado));
        }
        //console.log(chalk.yellow('Lista de links'), resultado)
    } catch(err) {
        console.log(err);
    }
}

processaTexto(path);