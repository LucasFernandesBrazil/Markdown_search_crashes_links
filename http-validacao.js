function geraArrayDeURLs(arrayLinks) {
    // Loop para cada { chave: valor }

    return arrayLinks.map(objetoLink => Object.values(objetoLink).join())
}

export default function validaURLs(arrayLinks) {
    return geraArrayDeURLs(arrayLinks);
}