import React from 'react';
import { ShelterAnimalList } from '@/domain/models/api/ShelterAnimalList.model';
import animalListGetter from "./ShelterService";
import AnimalListMock from "./mock/AnimalList.json";

describe('Requests from the ShelterBuddy Animal API', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  })

  it("expect that API returns status 200 (OK)", async() => {
    fetchMock.mockOnce(JSON.stringify(AnimalListMock), { status: 200 });
    const res = await animalListGetter();
    expect(res.status).toEqual(200);
  });

  it("expect that API has been called once with the correct URL", async() => {
    fetchMock.mockOnce(JSON.stringify(AnimalListMock));
    const res = await animalListGetter();
    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock).toHaveBeenCalledWith("https://shelterbuddy.vercel.app/assets/data/AnimalList.json");
  });

  it("retrieves the AnimalList endpoint data", async() => {
    fetchMock.mockOnce(JSON.stringify(AnimalListMock));
    const res = await animalListGetter();
    const data: ShelterAnimalList = await res.json();
    expect(data).toBeDefined();
    expect(data.Data.length).toBeGreaterThan(0);
  });

  it.todo("get the animal total list count");
  it.todo("retrieves the AnimalPhotoList endpoint data");
  it.todo("find an animal by Name");
  it.todo("find an animal photo by Id");
});
