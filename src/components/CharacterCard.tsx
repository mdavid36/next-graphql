import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Character } from "@/graphql/getCharacters";

type CharacterCardParams = {
  character: Character;
};

function CharacterCard({ character }: CharacterCardParams) {
  return (
    <Card key={character.id} sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="h5">{character.name}</Typography>
        <CardMedia
          component={() => (
            <Image
              src={character.image}
              alt={character.name}
              width={100}
              height={100}
              placeholder="blur"
              blurDataURL="..."
            />
          )}
        />
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack>
              <Typography>Gender: {character.gender}</Typography>
              <Typography>Species: {character.species}</Typography>
              <Typography>Status: {character.status}</Typography>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CharacterCard;
