import { Alert, Container, Grid, Typography } from "@mui/material";

import CharacterCard from "./CharacterCard";
import { characterData, CharactersVars } from "@/graphql/getCharacters";
import PagWithTotal from "./PagWithTotal";

export type CharactersParams = {
  data: characterData["characters"];
  filter: CharactersVars;
  setFilter: React.Dispatch<React.SetStateAction<CharactersVars>>;
};

const Characters = ({ data, filter, setFilter }: CharactersParams) => {
  const handleSetPage = (page: number) => {
    setFilter((prev) => ({ ...prev, page }));
  };
  const Pagination = (
    <PagWithTotal data={data} page={filter.page} setPage={handleSetPage} />
  );
  return (
    <Container>
      <Typography variant="h2" color="text.primary">
        Characters
      </Typography>
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
