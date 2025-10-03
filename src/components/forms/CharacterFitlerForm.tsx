import {
  CharactersSearchParams,
  defaultCharacterFilters,
} from "@/graphql/getCharacters";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

export type CharacterFilterFormProps = {
  searchParams: CharactersSearchParams;
  setSearchParams: React.Dispatch<React.SetStateAction<CharactersSearchParams>>;
};

const CharacterFilterForm = ({
  searchParams,
  setSearchParams,
}: CharacterFilterFormProps) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: searchParams.filter || defaultCharacterFilters,
  });

  const onSubmit: SubmitHandler<typeof defaultCharacterFilters> = (data) => {
    setSearchParams(() => ({ page: 1, filter: { ...data } }));
  };
  return (
    <Container>
      <Box mb={2}>
        <Typography variant="h6" color="text.primary">
          Filter your character search
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" gap={2} mb={2} flexWrap="wrap">
          {Object.entries(defaultCharacterFilters).map(([key]) => (
            <Controller
              key={key}
              name={key as keyof typeof defaultCharacterFilters}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                />
              )}
            />
          ))}
        </Box>
        <Box display="flex" gap={2} mb={2}>
          <Button type="submit" variant="contained">
            Apply Filters
          </Button>
          <Button
            type="button"
            variant="outlined"
            onClick={() => {
              setSearchParams({ filter: defaultCharacterFilters, page: 1 });
              reset();
            }}
          >
            Clear Filters
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default CharacterFilterForm;
