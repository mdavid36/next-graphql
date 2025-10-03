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
      count: number;
      next: number | null;
      pages: number;
      prev: number | null;
    };
  };
};

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
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

const useGetCharacters = (page: number) => {
  const { error, data } = useSuspenseQuery<characterData>(GET_CHARACTERS, {
    variables: { page: page },
  });
  return { error, data };
};

export default useGetCharacters;
