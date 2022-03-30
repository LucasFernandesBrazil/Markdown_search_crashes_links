import fetch from 'node-fetch';

function handleError(err) {
    throw new Error(err.message);
}

async function checkStatus(arrayURLs) {
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
        handleError(err);
    }
}

function generateArrayURLs(arrayLinks) {
    return arrayLinks
        .map(objectLink => Object
            .values(objectLink).join());
}

export default async function validateURLs(arrayLinks) {
    const links = generateArrayURLs(arrayLinks);
    const statusLinks = await checkStatus(links);
    // spread operator

    const results = arrayLinks.map((object, index) => ({
        ...object,
        status: statusLinks[index]
    }))
    return results;
}