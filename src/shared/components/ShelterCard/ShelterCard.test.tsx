import { Animal } from '@/domain/models/Animal.model';
import { render } from '@testing-library/react';
import  { axe } from "jest-axe";
import ShelterCard from "./index";

const animalMock: Animal = {
    "name": "",
    "type": "",
    "breed": "",
    "gender": "",
    "color": "",
}

describe('ShelterCard Unit Tests', () => {
    beforeAll(() => {
        // TO PREVENT JSDOM ERRORS IN ACESSIBILITY CHECK
        const { getComputedStyle } = window;
        window.getComputedStyle = (elt) => getComputedStyle(elt);
    })
    it("Must render card with default info", () => {
        render(<ShelterCard {...animalMock}/>)

        const headerElement = document.querySelector(".shelter-table-animal__card");
        expect(headerElement).toBeInTheDocument();
    });
    it("Card must be acessible", async() => {
        const { container} = render(<ShelterCard {...animalMock}/>)
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
})