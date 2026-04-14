export interface Dogdata {
    id:                 string;
    name:               string;
    species_id:         string;
    life_span:          null | string;
    temperament:        string;
    origin:             string;
    country_codes:      string;
    country_code:       string;
    description:        string;
    bred_for:           null;
    perfect_for:        null;
    breed_group:        BreedGroup;
    history:            string;
    reference_image_id: string;
    weight:             Eight;
    height:             Eight;
    image:              Image;
}

export interface BreedGroup {
    Companion: "Companion",
    FoundationStockService:"Foundation Stock Service",
    Guardian: "Guardian",
    Herding: "Herding",
    Hound: "Hound",
    Mixed: "Mixed",
    NonSporting: "Non-Sporting",
    Sporting: "Sporting",
    Terrier: "Terrier",
    Toy: "Toy",
    Working: "Working",
}

export interface Eight {
    imperial: string;
    metric:   string;
}

export interface Image {
    id:     string;
    url:    string;
    width:  number;
    height: number;
}
