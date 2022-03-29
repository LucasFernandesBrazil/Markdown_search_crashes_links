import chalk from 'chalk';
import fs from 'fs';

function trataErro(err) {
    throw new Error(chalk.red(err));
}

async function pegaArquivo(path) {
    const encoding = 'utf-8';
    try{
        const data = await fs.promises.readFile(path, encoding)
        console.log(chalk.green(data))
    }catch (err) {
        trataErro(err);
    }
}

pegaArquivo('./arquivos/texto1.md');