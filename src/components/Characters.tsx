import { Alert, Grid } from "@mui/material";
import CharacterCard from "./character/card/CharacterCard";
import { CharactersSearchResults } from "@/graphql/getCharacters";
import PagWithTotal from "./PagWithTotal";
import CharacterFilterForm, {
  CharacterFilterFormProps,
} from "./forms/CharacterFilterForm";

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
    <>
      <CharacterFilterForm
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
      {Pagination}
      <Grid container spacing={2}>
        {data.results.length ? (
          data.results.map((character) => (
            <Grid size={{ xs: 12, md: 4, lg: 3 }} key={character.id}>
              <CharacterCard character={character} key={character.id} />
            </Grid>
          ))
        ) : (
          <Alert severity="error">No characters found!</Alert>
        )}
      </Grid>
      {Pagination}
    </>
  );
};

export default Characters;
