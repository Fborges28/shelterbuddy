import { ShelterAnimalListAPI } from "@/domain/models/api/ShelterAnimalList.model";

async function fetchAPI(apiURL: any) {
    return fetch(apiURL).then((data) => data).catch((error) => error);
}
  
export default fetchAPI;