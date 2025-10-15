import {
  CharactersSearchParams,
  defaultCharacterFilters,
  FilterCharacter,
} from "@/graphql/getCharacters";
import { Box, Button, Container, Typography } from "@mui/material";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import characterFilterValidation from "@/validation/characterFilterValidation";
import CharacterFilterFormFields from "./CharacterFilterFormFields";

export type CharacterFilterFormShellProps = {
  searchParams: CharactersSearchParams;
  setSearchParams: React.Dispatch<React.SetStateAction<CharactersSearchParams>>;
};

const CharacterFilterFormShell = ({
  searchParams,
  setSearchParams,
}: CharacterFilterFormShellProps) => {
  const methods = useForm({
    resolver: yupResolver(characterFilterValidation),
    defaultValues: { ...searchParams.filter },
  });
  const { handleSubmit, reset } = methods;

  const handleResetForm = () => {
    setSearchParams({ filter: defaultCharacterFilters, page: 1 });
    reset();
  };

  const onSubmit: SubmitHandler<FilterCharacter> = (data) => {
    setSearchParams(() => ({ page: 1, filter: { ...data } }));
  };
  return (
    <Container disableGutters>
      <Box mb={2}>
        <Typography variant="h6" color="text.primary">
          Filter your character search
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <CharacterFilterFormFields />
        </FormProvider>
        <Box display="flex" justifyContent="flex-end" gap={2} mb={2}>
          <Button type="submit" variant="contained">
            Apply Filters
          </Button>
          <Button type="button" variant="outlined" onClick={handleResetForm}>
            Clear Filters
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default CharacterFilterFormShell;
