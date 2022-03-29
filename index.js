import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro) {
    throw new Error(chalk.red(erro));
}

function pegaArquivo (path) {
    const encoding = 'utf-8'
    fs.readFile(path, encoding, (err, data) => {
        if (err) {
            trataErro(err);
        }
        console.log(chalk.green(data));
    })
}

pegaArquivo('./arquivos/texto1.md')