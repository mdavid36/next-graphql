import gql from "graphql-tag";
import { useQuery } from "@apollo/client/react";

type CharacterData = {
  character: {
    id: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      id: string;
      name: string;
      type: string;
      dimension: string;
    };
    location: {
      id: string;
      name: string;
      type: string;
      dimension: string;
    };
    image: string;
    episode: {
      id: string;
      name: string;
      air_date: string;
      episode: string;
    }[];
  };
};

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
        type
        dimension
      }
      location {
        id
        name
        type
        dimension
      }
      image
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
`;

const useGetCharacter = (id: string, skip: boolean) => {
  return useQuery<CharacterData>(GET_CHARACTER, {
    variables: { id },
    skip,
  });
};

export default useGetCharacter;
