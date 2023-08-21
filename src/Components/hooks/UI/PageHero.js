import { Container, Text, Title, useMantineTheme } from "@mantine/core";
import hexToRGBA from "../hexToRGBA";

export default function PageHero({heading, children, color}) {
    const theme = useMantineTheme();
  return (
    <Container
      sx={{
        width: "100%",
        height: "60vh",
        minHeight: "450px",
        maxHeight: "800px",
        padding: "15vh 15vw 5vh 6vw",
     display: "flex",
        flexDirection: "column",
        backgroundColor: hexToRGBA(color ? color : "#8DE6D9", 0.5),
          '::before': {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: "auto",
      background: 'url(/images/heroBackgroundb.jpg) lightgray 50% / cover no-repeat',
      opacity: 0.25,
      zIndex: -1,
    }
      }}
    >
        <Title size={"4.2rem"} order={1} style={{ color: theme.colors.neutral[8], marginBottom: "auto" }}>{heading}</Title>
      <Text sx={{}} size="1rem">{children}</Text>
    </Container>
  );
}
