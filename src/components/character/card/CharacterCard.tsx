import {
  Alert,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Grow,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Character } from "@/graphql/getCharacters";
import { useEffect, useRef, useState } from "react";
import useGetCharacter from "@/graphql/getCharacter";
import handleTimer from "./cardHandlers";

type CharacterCardParams = {
  character: Character;
};

function CharacterCard({ character }: CharacterCardParams) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { error, data } = useGetCharacter(character.id, isExpanded);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    handleTimer(timeoutRef, () => setIsExpanded(true), 2000);
  };

  const handleMouseLeave = () => {
    handleTimer(timeoutRef, () => setIsExpanded(false), 500);
  };

  useEffect(() => {
    const timeout = timeoutRef.current;
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <Card
      key={character.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        ...(isExpanded
          ? {
              width: "30%",
              zIndex: 2,
              transition: "height 0.4s ease-in, width 0.4s ease-in-out",
            }
          : { transition: "width 0.3s ease-in-out" }),
        height: isExpanded ? 600 : 300,
        position: isExpanded ? "absolute" : "relative",
      }}
    >
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
          <Grid size={{ xs: 12 }}>
            <Stack>
              <Typography>Gender: {character.gender}</Typography>
              <Typography>Species: {character.species}</Typography>
              <Typography>Status: {character.status}</Typography>
            </Stack>
          </Grid>
        </Grid>
        {isExpanded && (
          <Grow in={isExpanded}>
            <Grid container spacing={1}>
              {error && <Alert severity="error">Error: {error.message}</Alert>}
              {data && (
                <Stack>
                  <Typography>
                    Origin Name: {data.character.origin?.name}
                  </Typography>
                  <Typography>
                    Location Name: {data.character.location?.name}
                  </Typography>
                  <Typography>
                    Dimension: {data.character.location?.dimension}
                  </Typography>
                </Stack>
              )}
            </Grid>
          </Grow>
        )}
      </CardContent>
    </Card>
  );
}

export default CharacterCard;
