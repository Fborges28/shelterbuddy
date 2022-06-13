import { AnimalAPIModel } from '@/domain/models/api/Animal.model';
import { ShelterAPIPagination } from '@/domain/models/api/Pagination.model';

export interface ShelterAnimalList{
    Data: AnimalAPIModel[],
    Paging: ShelterAPIPagination
}