import chalk from 'chalk';
import fs from 'fs';

function trataErro(err) {
    throw new Error(chalk.red(err));
}

// function pegaArquivo (path) {
//     const encoding = 'utf-8';
//     fs.readFile(path, encoding, (err, data) => {
//         if (err) {
//             trataErro(err);
//         }
//         console.log(chalk.green(data));
//     })
// }

function pegaArquivo(path) {
    const encoding = 'utf-8';
    fs.promises.readFile(path, encoding)
    .then((data) => console.log(chalk.green(data)))
    .catch((err) => trataErro(err))
}

pegaArquivo('./arquivos/texto1.md');