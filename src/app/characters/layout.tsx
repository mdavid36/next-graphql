import { Container, Divider, Typography } from "@mui/material";

export default function CharactersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <Typography variant="h2" color="text.primary">
        Characters
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Container>
        <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
          Browse and filter characters from the Rick and Morty universe. Use the
          filters below to narrow down your search by name, species, gender,
          type, or status
        </Typography>
      </Container>
      {children}
    </Container>
  );
}
