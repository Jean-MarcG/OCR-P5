export const getRandomPart = (generators, categorie, key) => {
    const max = generators[categorie][key].length;
    const idx = Math.floor(Math.random() * (max - 0));
    return generators[categorie][key][idx];
}
