const spacexBaseUrl = 'https://api.spacexdata.com/'

const launches = 'launches/'
const v3s = 'v3/'

const urls = {
    v3s: {
        v3sUrl: `${spacexBaseUrl}${v3s}`
    },
    launches: {
        launchesUrl: `${spacexBaseUrl}${v3s}${launches}`
    }
}

export {
    urls, spacexBaseUrl
}