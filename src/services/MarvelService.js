import axios from 'axios';

export class MarvelService {

  // --------------------------------------------------
  // ENDPOINTS
  // --------------------------------------------------
  static get ENDPOINTS() {
    return {
      comic: 'https://gateway.marvel.com:443/v1/public/comics',
      comics: 'https://gateway.marvel.com:443/v1/public/comics',
      character: 'https://gateway.marvel.com:443/v1/public/characters',
      characters: 'https://gateway.marvel.com:443/v1/public/characters',
    };
  }

  // --------------------------------------------------
  // SETUP
  // --------------------------------------------------
  constructor(config) {
    this.apiKey = config.apiKey;
  }

  // --------------------------------------------------
  // AUTHENTICATION
  // --------------------------------------------------
  getAuthConfig() {
    return { apikey: this.apiKey };
  }

  // --------------------------------------------------
  // CHARACTERS-RELATED METHODS
  // --------------------------------------------------
  getCharacters(config = {}) {
    // console.warn('Whoops, it looks like this method hasn\'t been implemented yet.');
    // TODO:
    // - Create the `params` object.
    console.log('Params object');
    const myRequestParams = { ...config, ...this.getAuthConfig() };

    // - Extract the correct endpoint from `ENDPOINTS`.
    console.log('Endpoints object');
    const endpoint = MarvelService.ENDPOINTS.characters;

    // - Dispatch a request using `axios.get()`.
    console.log('Axios request');
    return axios.get(endpoint, { params: myRequestParams })
      .then((response) => {
        console.log(response.data.data);
        return response.data.data;  // - Parse and return the response.
      });
  }

  getCharacter(id, config = {}) {
    // console.warn('Whoops, it looks like this method hasn\'t been implemented yet.');
    // TODO:
    // - Create the `params` object.
    console.log('Params object');
    const myRequestParams = { ...config, ...this.getAuthConfig() };

    // - Extract the correct endpoint from `ENDPOINTS`; add the `id`.
    console.log('Endpoings object');
    const endpoint = `${MarvelService.ENDPOINTS.character}/${ id }`;

    // - Dispatch a request using `axios.get()`.
    console.log('Axios request');
    return axios.get(endpoint, { params: myRequestParams })
      .then((response) => {
        console.log(response.data.data);
        return response.data.data;  // - Parse and return the response.
      });
  }

  getComics(config = {}) {
    // console.warn('Whoops, it looks like this method hasn\'t been implemented yet.');
    // TODO:
    // - Create the `params` object.
    console.log('Params object');
    const myRequestParams = { ...config, ...this.getAuthConfig() };

    // - Extract the correct endpoint from `ENDPOINTS`.
    console.log('Endpoints object');
    const endpoint = MarvelService.ENDPOINTS.comics;

    // - Dispatch a request using `axios.get()`.
    console.log('Axios request');
    return axios.get(endpoint, { params: myRequestParams })
      .then((response) => {
        console.log(response.data.data);
        return response.data.data;  // - Parse and return the response.
      });
  }

  getComic(id, config = {}) {
    // console.warn('Whoops, it looks like this method hasn\'t been implemented yet.');
    // TODO:
    // - Create the `params` object.
    console.log('Params object');
    const myRequestParams = { ...config, ...this.getAuthConfig() };

    // - Extract the correct endpoint from `ENDPOINTS`; add the `id`.
    console.log('Endpoings object');
    const endpoint = `${MarvelService.ENDPOINTS.comic}/${ id }`;

    // - Dispatch a request using `axios.get()`.
    console.log('Axios request');
    return axios.get(endpoint, { params: myRequestParams })
      .then((response) => {
        console.log(response.data.data);
        return response.data.data;  // - Parse and return the response.
      });
  }

}
