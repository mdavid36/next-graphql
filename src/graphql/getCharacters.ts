import { useSuspenseQuery } from "@apollo/client/react";
import gql from "graphql-tag";

export type Character = {
  id: string;
  name: string;
  image: string;
  gender: string;
  species: string;
  status: string;
};

export type characterData = {
  characters: {
    results: Character[];
    info: {
      count: number | null;
      next: number | null;
      pages: number | null;
      prev: number | null;
    };
  };
};

export type CharactersVars = {
  page: number;
  filter?: FilterCharacter;
};
export type FilterCharacter = {
  name?: string;
  species?: string;
  gender?: string;
  type?: string;
  status?: string;
};

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        species
        gender
        image
        status
      }
      info {
        count
        next
        pages
        prev
      }
    }
  }
`;

const useGetCharacters = (filter: CharactersVars) => {
  const { error, data } = useSuspenseQuery<characterData, CharactersVars>(
    GET_CHARACTERS,
    {
      variables: { ...filter },
    }
  );
  return { error, data };
};

export default useGetCharacters;
