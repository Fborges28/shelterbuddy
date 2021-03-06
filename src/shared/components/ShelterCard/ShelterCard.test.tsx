import { Animal } from '@/domain/models/Animal.model';
import { render, screen, fireEvent } from '@testing-library/react';
import  { axe } from "jest-axe";
import ShelterCard from "./index";

const animalMock: Animal = {
    "name": "Abby",
    "type": "Cat",
    "breed": "Domestic Short Hair",
    "gender": "Female",
    "color": "Blue Cream Calico",
}

describe('ShelterCard Unit Tests', () => {
    beforeAll(() => {
        // TO PREVENT JSDOM ERRORS IN ACESSIBILITY CHECK
        const { getComputedStyle } = window;
        window.getComputedStyle = (elt) => getComputedStyle(elt);
    })
    it("Must render card with default info", () => {
        const mockFn = jest.fn();
        render(<ShelterCard animal={animalMock} handleCurrentDetail={mockFn}/>)

        const cardElement = document.querySelector(".shelter-table-animal__card");
        expect(cardElement).toBeInTheDocument();
    });
    it("Clicks on the details button", () => {
        const mockFn = jest.fn();
        render(<ShelterCard animal={animalMock} handleCurrentDetail={mockFn}/>)
        const buttonElement = document.querySelector("button");
        fireEvent.click(buttonElement!);
        expect(mockFn).toHaveBeenCalled();
    });
    it("Must render card content", async () => {
        const mockFn = jest.fn();
        render(<ShelterCard animal={animalMock} handleCurrentDetail={mockFn}/>)

        const name = screen.getByTestId('shelter-animal-card-name');
        const type = screen.getByTestId('shelter-animal-card-type');
        const breed = screen.getByTestId('shelter-animal-card-breed');
        const gender = screen.getByTestId('shelter-animal-card-gender');
        const color = screen.getByTestId('shelter-animal-card-color');

        expect(name?.textContent).toBe(animalMock.name);
        expect(type?.textContent).toBe("Type: " + animalMock.type);
        expect(breed?.textContent).toBe("Breed: " + animalMock.breed);
        expect(gender?.textContent).toBe("Gender: " + animalMock.gender);
        expect(color?.textContent).toBe("Color: " + animalMock.color);
    });
    it("Card must be acessible", async() => {
        const mockFn = jest.fn();
        const { container} = render(<ShelterCard animal={animalMock} handleCurrentDetail={mockFn}/>)
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
})