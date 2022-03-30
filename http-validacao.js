import fetch from 'node-fetch';

function manejaErros(err) {
    throw new Error(err.message);
}

async function checaStatus(arrayURLs) {
    try {
        const arrayStatus = await Promise
            .all(
                arrayURLs
                    .map(async url => {
                        const res = await fetch(url);
                        return res.status;
            })
        )
        return arrayStatus;
    } catch (err) {
        manejaErros(err);
    }
}

function geraArrayDeURLs(arrayLinks) {
    // Loop para cada { chave: valor }
    return arrayLinks
        .map(objetoLink => Object
            .values(objetoLink).join());
}

export default async function validaURLs(arrayLinks) {
    const links = geraArrayDeURLs(arrayLinks);
    const statusLinks = await checaStatus(links);
    // spread operator

    const resultados = arrayLinks.map((objeto, index) => ({
        ...objeto,
        status: statusLinks[index]
    }))
    return resultados;
}