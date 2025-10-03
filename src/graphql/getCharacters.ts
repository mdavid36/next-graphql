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

export type CharactersSearchResults = {
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

export type CharactersSearchParams = {
  page: number;
  filter: FilterCharacter;
};
export type FilterCharacter = {
  name?: string;
  species?: string;
  gender?: string;
  type?: string;
  status?: string;
};

export const defaultCharacterFilters: FilterCharacter = {
  name: "",
  species: "",
  gender: "",
  type: "",
  status: "",
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

const useGetCharacters = (filter: CharactersSearchParams) => {
  const { error, data } = useSuspenseQuery<
    CharactersSearchResults,
    CharactersSearchParams
  >(GET_CHARACTERS, {
    variables: { ...filter },
  });
  return { error, data };
};

export default useGetCharacters;
