import handleLabelFromKey from "@/app/utils/handleLabelFromKey";
import {
  defaultCharacterFilters,
  FilterCharacter,
} from "@/graphql/getCharacters";
import { Grid, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function CharacterFilterFormFields() {
  const { control } = useFormContext<FilterCharacter>();
  return (
    <Grid container spacing={2} mb={2}>
      {Object.entries(defaultCharacterFilters).map(([key]) => {
        const label = handleLabelFromKey(key);
        return (
          <Grid key={key} size={{ xs: 12, sm: 4 }}>
            <Controller
              name={key as keyof typeof defaultCharacterFilters}
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  fullWidth
                  label={label}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default CharacterFilterFormFields;
