import Apiconfig from "./config.js";
import axios from "axios";

const API_BASE_URL = Apiconfig.API_BASE_URL;

const CharactersApi = {
    getAllCharacters: async () => {
        return await axios.get(`${API_BASE_URL}/characters`);
    },
    stundentperhouse: async () => {
        return await axios.get(`${API_BASE_URL}/studentperhouse`);
    },
    charactersperspecies: async () => {
        return await axios.get(`${API_BASE_URL}/charactersperspecies`);
    },
    woodperwand: async () => {
        return await axios.get(`${API_BASE_URL}/woodperwand`);
    },
    coreperwand: async () => {
        return await axios.get(`${API_BASE_URL}/coreperwand`);
    },
};

export default CharactersApi;
