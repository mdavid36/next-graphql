import { Box, Container, Pagination, Typography } from "@mui/material";
import { CharactersParams } from "../characters/Characters";

type PagWithTotalProps = {
  data: CharactersParams["data"];
  page: number;
  setPage: (page: number) => void;
};

const PagWithTotal = ({ data, page, setPage }: PagWithTotalProps) => {
  return (
    <Container sx={{ mb: 2, display: "flex", justifyContent: "flex-end" }}>
      <Box display="flex" alignItems="center" mr={2}>
        <Typography variant="body1" color="text.primary">
          Total: {data.info.count || 0}
        </Typography>
      </Box>
      {!!data.info.pages && (
        <Pagination
          count={data.info.pages}
          page={page}
          onChange={(_, value) => setPage(value)}
        />
      )}
    </Container>
  );
};

export default PagWithTotal;
