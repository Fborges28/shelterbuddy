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
        render(<ShelterCard breed="" color="" gender="" name="" type=""/>)

        const cardElement = document.querySelector(".shelter-table-animal__card");
        expect(cardElement).toBeInTheDocument();
    });
    it("Clicks on the details button", () => {
        render(<ShelterCard breed="" color="" gender="" name="" type=""/>)
        const spy = jest.spyOn(global.console, 'log');
        const buttonElement = document.querySelector("button");
        fireEvent.click(buttonElement!);
        expect(global.console.log).toHaveBeenCalledWith("details");
        spy.mockRestore();
    });
    it("Must render card content", async () => {
        render(<ShelterCard {...animalMock}/>)

        const name = await screen.findByText("Abby");
        const type = await screen.findByText("Type: Cat");
        const breed = await screen.findByText("Breed: Domestic Short Hair");
        const gender = await screen.findByText("Gender: Female");
        const color = await screen.findByText("Color: Blue Cream Calico");

        expect(name?.innerHTML).toBe(animalMock.name);
        expect(type?.innerHTML).toBe("Type: " + animalMock.type);
        expect(breed?.innerHTML).toBe("Breed: " + animalMock.breed);
        expect(gender?.innerHTML).toBe("Gender: " + animalMock.gender);
        expect(color?.innerHTML).toBe("Color: " + animalMock.color);
    });
    it("Card must be acessible", async() => {
        const { container} = render(<ShelterCard {...animalMock}/>)
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
})