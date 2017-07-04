import config from './config'; // grab your api key and secret at https://last.fm/api

const { apiKey } = config;
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=mexico&api_key=${apiKey}&format=json`;

export default function getArtists() {
  return fetch(URL)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}
