import { Alert, Container, Grid, Typography } from "@mui/material";

import CharacterCard from "./CharacterCard";
import { CharactersSearchResults } from "@/graphql/getCharacters";
import PagWithTotal from "./PagWithTotal";
import CharacterFilterForm, {
  CharacterFilterFormProps,
} from "./forms/CharacterFitlerForm";

export interface CharactersParams extends CharacterFilterFormProps {
  data: CharactersSearchResults["characters"];
}

const Characters = ({
  data,
  searchParams,
  setSearchParams,
}: CharactersParams) => {
  const handleSetPage = (page: number) => {
    setSearchParams((prev) => ({ ...prev, page }));
  };
  const Pagination = (
    <PagWithTotal
      data={data}
      page={searchParams.page}
      setPage={handleSetPage}
    />
  );
  return (
    <Container>
      <Typography variant="h2" color="text.primary">
        Characters
      </Typography>
      <CharacterFilterForm
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
      {Pagination}
      <Grid container spacing={2}>
        {data.results.length ? (
          data.results.map((character) => (
            <Grid size={{ xs: 12, md: 4, lg: 3 }} key={character.id}>
              <CharacterCard character={character} />
            </Grid>
          ))
        ) : (
          <Alert severity="error">No characters found!</Alert>
        )}
      </Grid>
      {Pagination}
    </Container>
  );
};

export default Characters;
