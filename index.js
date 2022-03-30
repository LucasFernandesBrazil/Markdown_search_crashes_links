//import chalk from 'chalk';
import fs from 'fs';

function extractLinks(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResults = [];
    let temp;

    while ((temp = regex.exec(text)) !== null) {
        arrayResults.push({ [temp[1]]: temp[2] });
    }
    return arrayResults.length === 0 ? false : arrayResults;
}

function handleError(err) {
    throw new Error(err);
}

export default async function getFile(path) {
    const encoding = 'utf-8';
    try{
        const data = await fs.promises.readFile(path, encoding);
        return extractLinks(data);
    }catch(err) {
        handleError(err);
    }
}
