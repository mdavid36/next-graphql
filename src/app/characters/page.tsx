"use client";
import React, { Suspense, useState } from "react";
import Characters from "@/components/Characters";
import { CircularProgress, Container } from "@mui/material";
import useGetCharacters, { CharactersVars } from "@/graphql/getCharacters";

function Page() {
  const [filter, setFilter] = useState<CharactersVars>({
    page: 1,
    filter: {},
  });
  const { error, data } = useGetCharacters(filter);
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Container>
      <Suspense fallback={<CircularProgress size="3rem" />}>
        <Characters
          data={data.characters}
          filter={filter}
          setFilter={setFilter}
        />
      </Suspense>
    </Container>
  );
}

export default Page;
