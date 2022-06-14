import { ShelterAPIPagination } from '@/domain/models/api/Pagination.model';

export interface ShelterAnimalPhoto {
    "Animal": { 
        "Uri": string, 
        "Id": number 
    },
    "IsDefault": boolean,
    "Photo": string,
    "PhotoThumbnailFormat": string,
    "LastUpdatedUtc": string,
    "Id": number
}

export interface ShelterAnimalPhotoListAPI{
    "Data": ShelterAnimalPhoto[],
    "Paging": ShelterAPIPagination
}