import { gql } from "@apollo/client";

export const GET_ALL_CITIES = gql`
  {
    allCities {
      key
      name
      nativeName
      language
      currency
    }
  }
`;

export const GET_ALL_PLACES = gql`
  {
    allPlaces {
      key
      place
    }
  }
`;
