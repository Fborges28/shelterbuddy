import React from 'react';
import { render, screen } from '@testing-library/react';
import { ShelterData, AnimalModel } from './shelter.model';

describe('Requests from the ShelterBuddy Animal API', () => {
  let animalListResponse: Response;
  let animalListJSON: ShelterData;

  beforeEach(async () => {
    animalListResponse = await fetch("https://shelterbuddy.vercel.app/assets/data/AnimalList.json");
    animalListJSON = await animalListResponse.json();
  })

  it("expect that API returns status 200 (OK)", () => {
    expect(animalListResponse.status).toBe(200);
  });

  it("retrieves the AnimalList endpoint data", () => {
    expect(animalListJSON).toBeDefined();
  });

  it("expect that all animals have name", () => {
    const animalHasName = (animal: AnimalModel) => animal.Name;
    let animalsHaveName = animalListJSON.Data.every(animalHasName);
    expect(animalsHaveName).toBe(true);
  });


  it.todo("get the animal total list count");
  it.todo("retrieves the AnimalPhotoList endpoint data");
  it.todo("find an animal by Name");
  it.todo("find an animal photo by Id");
});
