"use client";
import React, { Suspense, useState } from "react";
import Characters from "@/components/Characters";
import { CircularProgress, Container } from "@mui/material";
import useGetCharacters from "@/graphql/getCharacters";

function Page() {
  const [page, setPage] = useState(1);
  const { error, data } = useGetCharacters(page);
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Container>
      <Suspense fallback={<CircularProgress size="3rem" />}>
        <Characters data={data.characters} page={page} setPage={setPage} />
      </Suspense>
    </Container>
  );
}

export default Page;
