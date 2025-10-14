import handleLabelFromKey from "@/app/utils/handleLabelFromKey";
import {
  defaultCharacterFilters,
  FilterCharacter,
} from "@/graphql/getCharacters";
import { Box, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function CharacterFilterFormFields() {
  const { control } = useFormContext<FilterCharacter>();
  return (
    <Box display="flex" gap={2} mb={2} flexWrap="wrap">
      {Object.entries(defaultCharacterFilters).map(([key]) => {
        const label = handleLabelFromKey(key);
        return (
          <Controller
            key={key}
            name={key as keyof typeof defaultCharacterFilters}
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label={label}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        );
      })}
    </Box>
  );
}

export default CharacterFilterFormFields;
