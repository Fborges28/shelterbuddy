import React from 'react';
import {act, cleanup, findByText, fireEvent, render, screen, waitFor } from '@testing-library/react';
import AnimalPhotoListMock from "@/services/mock/AnimalPhotoList.json";
import AnimalListMock from "@/services/mock/AnimalList.json";
import ShelterAnimalTable from "./index";

describe('ShelterAnimalTable Unit Tests', () => {
    afterEach(() => {
        cleanup;
        jest.resetAllMocks();
     })
     

    it("Must render input search", async() => {
        fetchMock.mockOnce(JSON.stringify(AnimalListMock), { status: 200 });
        let component: any;

        await act(async() => {
            component = render(<ShelterAnimalTable/>);
        })

        const inputSearch = document.querySelector("#shelter-animal-search");
        expect(inputSearch).toBeInTheDocument();
    });

    it("Must render pagination", async() => {
        fetchMock.mockOnce(JSON.stringify(AnimalListMock), { status: 200 });
        fetchMock.mockOnce(JSON.stringify(AnimalPhotoListMock), { status: 200 });
        
        let component: any;

        await act(async() => {
            component = render(<ShelterAnimalTable/>);
        })

        const pagination = document.querySelector(".shelter-table-animal__pagination");
        expect(pagination).toBeInTheDocument();
    });

    it("Must render table content", async() => {
        fetchMock.mockOnce(JSON.stringify(AnimalListMock), { status: 200 });
        fetchMock.mockOnce(JSON.stringify(AnimalPhotoListMock), { status: 200 });

        let component: any;

        await act(async() => {
            component = render(<ShelterAnimalTable/>);
        })

        const elements = component.getAllByText("Abby");
        expect(elements.length).toBeGreaterThan(0);
    });

    it("Must render table content after search", async() => {
        fetchMock.mockOnce(JSON.stringify(AnimalListMock), { status: 200 });
        fetchMock.mockOnce(JSON.stringify(AnimalPhotoListMock), { status: 200 });

        let component: any;

        await act(async() => {
            component = render(<ShelterAnimalTable/>);
        })

        const inputSearch = document.querySelector("#shelter-animal-search")! as HTMLInputElement;
        fireEvent.change(inputSearch, {target: {value: 'Abby'}});

        const searchResult = component.getAllByText("Abby");
        expect(searchResult.length).toBeGreaterThan(0);

        fireEvent.change(inputSearch, {target: {value: ''}});
        expect(inputSearch.value).toBe('')
    });

    it.todo("Must render table feedback content after paginate then search");

    it("Must render table feedback for no content", async() => {
        fetchMock.mockOnce(JSON.stringify(AnimalListMock), { status: 200 });
        fetchMock.mockOnce(JSON.stringify(AnimalPhotoListMock), { status: 200 });
        
        let component: any;

        await act(async() => {
            component = render(<ShelterAnimalTable/>);
        })

        const inputSearch = document.querySelector("#shelter-animal-search")! as HTMLInputElement;
        fireEvent.change(inputSearch, {target: {value: 'Incorrect name'}});

        const contentFeedback = component.getByText("No results founds for: Incorrect name");
        expect(contentFeedback).toBeInTheDocument();
    });

    it("Must render table feedback for API error", async() => {
        fetchMock.mockRejectOnce(new Error('An error occurred.'));
        let component: any;

        await act(async() => {
            component = render(<ShelterAnimalTable/>);
        })

        const contentFeedback = component.getByText("Sorry, we had a problem. Please, reload the page!");
        expect(contentFeedback).toBeInTheDocument();
    });
})