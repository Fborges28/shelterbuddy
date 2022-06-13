import React from 'react';
import { render, screen } from '@testing-library/react';
import  { axe } from "jest-axe";
import ShelterSearch from "./index";

describe('ShelterSearch Unit Tests', () => {
    let handleChange: jest.Mock<any, any>;

    beforeAll(() => {
        // TO PREVENT JSDOM ERRORS IN ACESSIBILITY CHECK
        const { getComputedStyle } = window;
        window.getComputedStyle = (elt) => getComputedStyle(elt);
    })

    beforeEach(() => {
        handleChange = jest.fn();
    })

    it("Must render search with default info", async () => {
        render(<ShelterSearch id="jest-search" handleChange={handleChange}/>)

        const expectedPlaceholder = "Search an animal by name";
        const inputSearchElement = screen.queryByPlaceholderText(expectedPlaceholder);
        expect(inputSearchElement).toBeInTheDocument();
    });
    it("Search must be acessible", async () => {
        const { container} = render(<ShelterSearch id="jest-search" handleChange={handleChange}/>)
        const results = await axe(container);
        expect(results).toHaveNoViolations();  
    });
})