import pegaArquivo from "../index.js";

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    })
    // it('deve retornar array com resultados', async () => {
    //     const result = await pegaArquivo('./arquivos/texto1.md');
    //     expect(pegaArquivo(result).toEqual(arrayResult));
    // })
})