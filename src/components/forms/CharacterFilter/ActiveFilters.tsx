import { FilterCharacter } from "@/graphql/getCharacters";
import React from "react";
import { handleFiltersWithValues } from "./handlers";
import { Box, List, ListItem, Typography } from "@mui/material";
import handleLabelFromKey from "@/app/utils/handleLabelFromKey";

function ActiveFilters({ filters }: { filters: FilterCharacter }) {
  const activeFilters = handleFiltersWithValues(filters);

  const displayedFilters = activeFilters.map(([key, value]) => {
    const label = handleLabelFromKey(key);
    return (
      <ListItem key={key} sx={{ gap: 1, display: "flex", width: "unset" }}>
        <Typography>{`${label}:`}</Typography>
        <Typography>{`"${value}"`}</Typography>
      </ListItem>
    );
  });
  return (
    <Box color={"text.secondary"} mb={2}>
      {displayedFilters.length > 0 && (
        <>
          <h4>Active Filters</h4>
          <List sx={{ display: "flex" }}>{displayedFilters}</List>
        </>
      )}
    </Box>
  );
}

export default ActiveFilters;
