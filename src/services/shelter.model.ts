export interface AnimalModel {
    "Name": string,
    "DateOfBirthUtc": Date,
    "License": { "Tag": string | null, "Issuer": string | null },
    "EuthanasiaReason": boolean | null,
    "SecondaryEuthanasiaReason": null,
    "EuthanasiaType": null,
    "IsApprovedForEuthanasia": boolean,
    "IsOwnerPresentForEuthanasia": boolean,
    "DoNotEuthanise": boolean,
    "DoNotEuthaniseReason": null,
    "EuthanasiaAuthorisedBy": null,
    "OtherEuthanasiaReason": null,
    "AdoptionFee": null,
    "AdoptionSummary": string,
    "Age": {
        "IsApproximate": boolean,
        "Months": number,
        "Weeks": number,
        "Years": number,
        "AgeGroup": { "Name": string, "Id": number }
    },
    "Breed": {
        "Primary": {
        "Name": string,
        "Uri": string,
        "Id": number
        },
        "PrimarySpecies": { "Uri": string, "Id": number },
        "Secondary": null,
        "SecondarySpecies": null,
        "IsCrossBreed": boolean
    },
    "BreederRegistrationNumber": null,
    "ContactLocation": {
        "Name": string,
        "Uri": string,
        "Id": number
    },
    "Features": {
        "CoatLength": null,
        "PrimaryColour": string,
        "SecondaryColour": string,
        "CoatType": null,
        "EarType": null,
        "TailType": null,
        "EyeColour": null
    },
    "Identification": {
        "HasMicrochip": boolean,
        "PrimaryMicrochipNumber": string,
        "PrimaryMicrochipBrand": { "Name": string, "Id": number },
        "PrimaryMicrochipImplantDateUtc": Date,
        "SecondaryMicrochipNumber": null,
        "SecondaryMicrochipBrand": null,
        "SecondaryMicrochipImplantDateUtc": null,
        "OtherIdentification": null,
        "AcoNumber": null,
        "TagColour": null,
        "CollarType": null,
        "Barcode": null,
        "ShelterTag": null,
        "CustomTag": null,
        "CollarColour": null,
        "OldDatabaseNumber": null
    },
    "Intake": {
        "DateUtc": Date,
        "Region": {
        "Name": string,
        "Uri": string,
        "Id": number
        },
        "Source": {
        "Name": string,
        "Uri": string,
        "Id": number
        },
        "ExtendedDetails": {
        "Uri": string,
        "Id": number
        },
        "Received": { "Name": string, "Id": number },
        "SurrenderReason": null,
        "BehaviourCondition": null,
        "EmergencyBoardingReason": null
    },
    "LastUpdatedUtc": Date,
    "Location": {
        "PhysicalLocation": {
        "Name": string,
        "Uri": string,
        "Id": number
        },
        "Kennel": null,
        "Shelter": {
        "Name": string,
        "Uri": string,
        "Id": number
        },
        "MostRecentPhysicalLocation": {
        "Name": string,
        "Uri": string,
        "Id": number
        }
    },
    "Medical": {
        "IsDeclawed": boolean,
        "IsVaccinated": boolean,
        "SpayedNeutered": string,
        "PreferredFood": null,
        "PreviousMedicalDetails": null
    },
    "Owner": {
        "Name": string,
        "Uri": string,
        "Id": number
    },
    "Pattern": null,
    "Sex": { "Name": string, "Uri": string, "Id": number}
    "Size": null,
    "Status": {
        "DateUtc": string,
        "Name": string,
        "Uri": string,
        "Id": number
    },
    "SubStatus": {
        "Name": string,
        "Uri": string,
        "Id": number
    },
    "SubStatuses": [
        {
        "Name": string,
        "Uri": string,
        "Id": number
        }
    ],
    "Type": {
        "Name": string,
        "Uri": string,
        "Id": number
    },
    "AvailableForAdoptionDateUtc": string,
    "DateOfWeighingUtc": string,
    "CurrentRabiesVaccination": null,
    "Litters": [{ "Uri": string, "Id": number}],
    "RabiesTag": null,
    "Origin": null,
    "DangerousAnimalInformation": null,
    "LostFoundAddress": {
        "Country": {
        "Name": string,
        "Uri": string,
        "Id": number
        },
        "Jurisdiction": {
            "Name": string,
            "Uri": string,
            "Id": number
        },
        "State": {
            "Abbreviation": string,
            "Name": string,
            "Uri": string,
            "Id": number
        },
        "StreetType": null,
        "Suburb": {
        "Name": string,
        "Uri": string,
        "Id": number
        },
        "DeliveryType": null,
        "PrintableString": string,
        "PrintableStreetAddressString": string,
        "CrossStreet": string,
        "DirectionOne": string,
        "DirectionTwo": string,
        "ExtraAddressDetails": string,
        "Postcode": string,
        "PostcodeSuffix": null,
        "StreetName": string,
        "StreetNumber": string,
        "UnitNumber": string,
        "DeliveryNumber": string,
        "IsApiValidated": boolean,
        "Id": number
    },
    "DateFoundUtc": string,
    "DateLostUtc": null,
    "IsDeleted": boolean,
    "Icons": null,
    "Weight": string,
    "MetaData": [],
    "RelatedAnimals": null,
    "Behaviour": null,
    "Media": null,
    "DistinguishingFeatures": string,
    "DueDateOutUtc": string,
    "Id": number
}

export interface ShelterPagination{
    Next:string
    Previous: number | null;
    TotalPages: number
    TotalResults: number
}

export interface ShelterData{
    Data: AnimalModel[],
    Paging: ShelterPagination
}