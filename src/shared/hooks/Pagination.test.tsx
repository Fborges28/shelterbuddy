import {renderHook, act, cleanup, findByText, fireEvent, render, screen, waitFor } from '@testing-library/react';
import {usePagination} from "./Pagination";
import AnimalListMock from "@/services/mock/AnimalList.json";
import fetchAPI from '@/services/ShelterService';
import { ShelterAnimalListAPI } from '@/domain/models/api/ShelterAnimalList.model';

describe('ShelterPaginationHook Unit Tests', () => {
    afterEach(() => {
        cleanup;
        jest.resetAllMocks();
     })

    it("Must goTo the defined page", () => {
        fetchMock.mockOnce(JSON.stringify(AnimalListMock), { status: 200 });
       
        return fetchAPI("https://shelterbuddy.vercel.app/assets/data/AnimalList.json").then((async (data) => {
            const json = await data.json();
            const { result } = renderHook(() => usePagination<ShelterAnimalListAPI>(json.Data, 10));
            act(() => { result.current.goTo(3); });
            expect(result.current.currentPage).toBe(3);
        }))
    });

    it("Must paginate to the next page", () => {
        fetchMock.mockOnce(JSON.stringify(AnimalListMock), { status: 200 });
       
        return fetchAPI("https://shelterbuddy.vercel.app/assets/data/AnimalList.json").then((async (data) => {
            const json = await data.json();
            const { result } = renderHook(() => usePagination<ShelterAnimalListAPI>(json.Data, 10));
            act(() => { result.current.next(); });
            expect(result.current.currentPage).toBe(2);
        }))
    });

    it("Must paginate to the previous page", () => {
        fetchMock.mockOnce(JSON.stringify(AnimalListMock), { status: 200 });
       
        return fetchAPI("https://shelterbuddy.vercel.app/assets/data/AnimalList.json").then((async (data) => {
            const json = await data.json();
            const { result } = renderHook(() => usePagination<ShelterAnimalListAPI>(json.Data, 10));
            act(() => { result.current.next(); });
            act(() => { result.current.prev(); });
            expect(result.current.currentPage).toBe(1);
        }))
    });
})