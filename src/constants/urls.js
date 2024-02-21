const rickAndMortyEndPoint = 'https://rickandmortyapi.com/api';

const episodes = '/episode'

const urls = {
    episodes: {
        base: `${rickAndMortyEndPoint}${episodes}`,
        byId: (id) => `${rickAndMortyEndPoint}${episodes}/${id}`
    },
    characters: {
        base: `${rickAndMortyEndPoint}/character`,
        byId: (id) => `${rickAndMortyEndPoint}/character/${id}`
    }
}

export { rickAndMortyEndPoint, urls };