import { Animal } from "@/domain/models/Animal.model";

export function createAnimalRow({name, type, breed, gender, color, photo = ""}: Animal): Animal{
    return {
        name, 
        type, 
        breed, 
        gender, 
        color,
        photo
    }
}