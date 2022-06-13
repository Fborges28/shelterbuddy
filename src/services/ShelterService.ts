import { ShelterAnimalList } from "@/domain/models/api/ShelterAnimalList.model";

async function animalListGetter(): Promise<any> {
    try {
      return await fetch("https://shelterbuddy.vercel.app/assets/data/AnimalList.json");
    } catch (e) {
      return null;
    }
}
  
export default animalListGetter;