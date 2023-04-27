import axios from "axios";
import { api_url } from "../helpers/config";
const createLobby = async (people_count = 5, creator = "User") => {
    const response = await axios.post(api_url + 'create/lobby', {
        people_count,
        creator,
    });
    return await response.data;
}