import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

    const setup = (value: any, id: any) => {
        const utils = render(<ShelterSearch value={value} id={id} handleChange={handleChange}/>)
        const input = utils.getByPlaceholderText('Search an animal by name') as HTMLInputElement;
        return {
          input,
          ...utils,
        }
    }

    it("Must render search with default info", async () => {
        const {input} = setup("", "")
        expect(input).toBeInTheDocument();
    });

    it("Must render search with undefined values", async () => {
        const {input} = setup(undefined, undefined)
        expect(input.value).toBe("");
    });

    it("Must render search with new value", async () => {
        const {input} = setup("Abby", "");
        expect(input.value).toBe('Abby');
    });

    it("Must render search with default info", async () => {
        const {input} = setup("", "");
        fireEvent.change(input, {target: {value: 'Abby'}})
        expect(input.value).toBe('Abby')
    });


    it("Search must be acessible", async () => {
        const {input} = setup("", "");
        const results = await axe(input);
        expect(results).toHaveNoViolations();  
    });
})