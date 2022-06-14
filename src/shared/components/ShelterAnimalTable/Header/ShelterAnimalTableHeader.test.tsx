import { fireEvent, render } from '@testing-library/react';
import  { axe } from "jest-axe";
import ShelterAnimalHeader from "./index";

describe('ShelterAnimalTableHeader Unit Tests', () => {
    let handleSearch: any;

    beforeAll(() => {
        // TO PREVENT JSDOM ERRORS IN ACESSIBILITY CHECK
        const { getComputedStyle } = window;
        window.getComputedStyle = (elt) => getComputedStyle(elt);
    })

    beforeEach(() => {
        handleSearch = jest.fn((x:string) => x);
    })

    const setup = (totalAnimals: any, searchCb: any) => {
        const utils = render(<ShelterAnimalHeader totalAnimals={totalAnimals} handleSearch={searchCb}/>)
        const searchInput = utils.getByPlaceholderText('Search an animal by name') as HTMLInputElement;
        return {
         searchInput,
          ...utils,
        }
    }

    it("Must render ShelterAnimalTableHeader with default info", () => {
        const {searchInput} = setup(100, handleSearch)
        expect(searchInput).toBeInTheDocument();
    });

    it("Must render ShelterAnimalTableHeader with undefined values", async () => {
        const {searchInput} = setup(undefined, undefined)
        expect(searchInput.value).toBe("");
    });

    it("Search must be acessible", async () => {
        const {searchInput} = setup(100, handleSearch);
        const results = await axe(searchInput);
        expect(results).toHaveNoViolations();  
    });
})