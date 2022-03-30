//import chalk from 'chalk';
import fs from 'fs';

function extraiLinks(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;

    while ((temp = regex.exec(text)) !== null) {
        arrayResultados.push({ [temp[1]]: temp[2] });
    }
    return arrayResultados.length === 0 ? false : arrayResultados;
}

function trataErro(err) {
    throw new Error(err);
}

export default async function pegaArquivo(path) {
    const encoding = 'utf-8';
    try{
        const data = await fs.promises.readFile(path, encoding);
        return extraiLinks(data);
    }catch (err) {
        trataErro(err);
    }
}

// pegaArquivo('./arquivos/texto1.md');