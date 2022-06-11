import React from 'react';
import { render, screen } from '@testing-library/react';
import { ShelterData, AnimalModel } from './shelter.model';

describe('Requests from the ShelterBuddy Animal API', () => {
  let animalListFetch;
  let animalListData: ShelterData;

  beforeEach(async () => {
    animalListFetch = await fetch("https://shelterbuddy.vercel.app/assets/data/AnimalList.json");
    animalListData = await animalListFetch.json();
  })

  it("retrieves the AnimalList endpoint data", async () => {
    expect(animalListData).toBeDefined();
  });

  it("expect that all animals have name", async () => {
    const animalHasName = (element: AnimalModel) => element.Name;
    let animalsHaveName = animalListData.Data.every(animalHasName);
    expect(animalsHaveName).toBe(true);
  });


  it.todo("get the animal total list count");
  it.todo("retrieves the AnimalPhotoList endpoint data");
  it.todo("find an animal by Name");
  it.todo("find an animal photo by Id");
});
