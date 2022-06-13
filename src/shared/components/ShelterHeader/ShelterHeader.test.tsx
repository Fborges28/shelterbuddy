import { render } from '@testing-library/react';
import  { axe } from "jest-axe";
import ShelterHeader from "./index";

describe('ShelterHeader Unit Tests', () => {
    beforeAll(() => {
        // TO PREVENT JSDOM ERRORS IN ACESSIBILITY CHECK
        const { getComputedStyle } = window;
        window.getComputedStyle = (elt) => getComputedStyle(elt);
    })
    it("Must render header with default info", () => {
        render(<ShelterHeader />)

        const headerElement = document.querySelector(".main-header");
        expect(headerElement).toBeInTheDocument();
    });
    it("Must contain ShelterBuddy logo", async () => {
        render(<ShelterHeader/>);

        const logoElement = document.querySelector("#logo");
        expect(logoElement).toBeInTheDocument();
    });
    it("Must be acessible", async() => {
        const { container} = render(<ShelterHeader/>)
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
})