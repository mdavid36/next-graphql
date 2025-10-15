"use client";
import React, { Suspense, useState } from "react";
import Characters from "@/components/characters/Characters";
import { CircularProgress, Container } from "@mui/material";
import useGetCharacters, {
  CharactersSearchParams,
  defaultCharacterFilters,
} from "@/graphql/getCharacters";

function Page() {
  const [searchParams, setSearchParams] = useState<CharactersSearchParams>({
    page: 1,
    filter: defaultCharacterFilters,
  });
  const { error, data } = useGetCharacters(searchParams);
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Container>
      <Suspense fallback={<CircularProgress size="3rem" />}>
        <Characters
          data={data.characters}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </Suspense>
    </Container>
  );
}

export default Page;
