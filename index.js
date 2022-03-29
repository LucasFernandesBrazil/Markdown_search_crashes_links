import chalk from 'chalk';
import fs from 'fs';

function extraiLinks(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;

    while ((temp = regex.exec(text)) !== null) {
        arrayResultados.push({ [temp[1]]: temp[2] })
    }
    return arrayResultados
}

function trataErro(err) {
    throw new Error(chalk.red(err));
}

async function pegaArquivo(path) {
    const encoding = 'utf-8';
    try{
        const data = await fs.promises.readFile(path, encoding)
        console.log(extraiLinks(data))
    }catch (err) {
        trataErro(err);
    }
}

pegaArquivo('./arquivos/texto1.md');