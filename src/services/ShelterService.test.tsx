import React from 'react';
import { ShelterAnimalListAPI } from '@/domain/models/api/ShelterAnimalList.model';
import fetchAPI from "./ShelterService";
import AnimalListMock from "./mock/AnimalList.json";
import AnimalPhotoListMock from "./mock/AnimalPhotoList.json";
import { waitFor } from '@testing-library/react';
import { ShelterAnimalPhotoListAPI } from '@/domain/models/api/ShelterAnimalPhotoList.model';

describe('Requests from the ShelterBuddy Animal API', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  })

  it("expect that API returns status 200 (OK)", async() => {
    fetchMock.mockOnce(JSON.stringify(AnimalListMock), { status: 200 });
    return fetchAPI("https://shelterbuddy.vercel.app/assets/data/AnimalList.json").then(data => {
      expect(data.status).toEqual(200);
    })
  });

  it("expect that API returns status 500 (Server Error)", async() => {
    fetchMock.mockOnce(JSON.stringify(AnimalListMock), { status: 500 });
    const res = await fetchAPI("https://shelterbuddy.vercel.app/assets/data/AnimalList.json");
    await waitFor(() => {
      expect(res.statusText).toBe("Internal Server Error");
    })
  });

  it("expect that API call throws an 404 error", async() => {
    fetchMock.mockOnce(JSON.stringify(AnimalListMock), { status: 404 });
    return fetchAPI("https://shelterbuddy.vercel.app/assets/data/AnimalList.jsonssss").catch(e => {
      expect(e.message).toBe("Not found");
    })
  });

  it("expect that API has been called once with the correct URL", async() => {
    fetchMock.mockOnce(JSON.stringify(AnimalListMock));
    return fetchAPI("https://shelterbuddy.vercel.app/assets/data/AnimalList.json").then(data => {
      expect(fetchMock.mock.calls.length).toEqual(1);
      expect(fetchMock).toHaveBeenCalledWith("https://shelterbuddy.vercel.app/assets/data/AnimalList.json");
    })
  });

  it("retrieves the AnimalList endpoint data", async() => {
    fetchMock.mockOnce(JSON.stringify(AnimalListMock));
    const res = await fetchAPI("https://shelterbuddy.vercel.app/assets/data/AnimalList.json");
    const data: ShelterAnimalListAPI = await res.json();
    expect(data).toBeDefined();
    expect(data.Data.length).toBeGreaterThan(0);
  });

  it("get the animal total list count", async() => {
    fetchMock.mockOnce(JSON.stringify(AnimalListMock));
    const res = await fetchAPI("https://shelterbuddy.vercel.app/assets/data/AnimalList.json");
    const data: ShelterAnimalListAPI = await res.json();
    expect(data.Data.length).toBe(100);
  });
  it("retrieves the AnimalPhotoList endpoint data", async() => {
    fetchMock.mockOnce(JSON.stringify(AnimalPhotoListMock));
    const res = await fetchAPI("https://shelterbuddy.vercel.app/assets/data/AnimalPhotoList.json");
    const data: ShelterAnimalPhotoListAPI = await res.json();
    expect(data.Data.length).toBe(2);
  });
});
