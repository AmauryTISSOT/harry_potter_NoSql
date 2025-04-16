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
    actorsornot: async () => {
        return await axios.get(`${API_BASE_URL}/actorsornot`);
    },
    stafforstudent: async () => {
        return await axios.get(`${API_BASE_URL}/stafforstudent`);
    },
    genderinhogwards: async () => {
        return await axios.get(`${API_BASE_URL}/genderinhogwards`);
    },
    genderperhouse: async () => {
        return await axios.get(`${API_BASE_URL}/genderperhouse`);
    },
    ancestryinhogwards: async () => {
        return await axios.get(`${API_BASE_URL}/ancestryinhogwards`);
    },
    ancestryineachhouse: async () => {
        return await axios.get(`${API_BASE_URL}/ancestryineachhouse`);
    },
    aliveordead: async () => {
        return await axios.get(`${API_BASE_URL}/aliveordead`);
    },
    nbofpatronus: async () => {
        return await axios.get(`${API_BASE_URL}/nbofpatronus`);
    },
    wandsize: async () => {
        return await axios.get(`${API_BASE_URL}/wandsize`);
    },
    wandsizepergender: async () => {
        return await axios.get(`${API_BASE_URL}/wandsizepergender`);
    },
    wandsizeperhouse: async () => {
        return await axios.get(`${API_BASE_URL}/wandsizeperhouse`);
    },
};

export default CharactersApi;
