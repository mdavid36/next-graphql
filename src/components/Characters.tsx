import { Container, Grid, Typography } from "@mui/material";

import CharacterCard from "./CharacterCard";
import { characterData } from "@/graphql/getCharacters";
import PagWithTotal from "./PagWithTotal";

export type CharactersParams = {
  data: characterData["characters"];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Characters = ({ data, page, setPage }: CharactersParams) => {
  return (
    <Container>
      <Typography variant="h2" color="text.primary">
        Characters
      </Typography>
      <PagWithTotal data={data} page={page} setPage={setPage} />
      <Grid container spacing={2}>
        {data.results.map((character) => (
          <Grid size={{ xs: 12, md: 4, lg: 3 }} key={character.id}>
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>
      <PagWithTotal data={data} page={page} setPage={setPage} />
    </Container>
  );
};

export default Characters;
