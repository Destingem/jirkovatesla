import { Container, Text, Title, useMantineTheme } from "@mantine/core";
import hexToRGBA from "../hexToRGBA";
import { useViewportSize } from "@mantine/hooks";
import useDevice from "../useDevice";

export default function PageHero({heading, children, color}) {
    const theme = useMantineTheme();
    const { height, width } = useViewportSize();
    const device = useDevice(width);
  return (
    <Container
      sx={{
        width: device !== "l" ? "100vw" : "50vw",
        height: "60vh",
        borderRadius: "0 0 25px 25px",
        minHeight: "450px",
        maxHeight: "800px",
        margin: "0",
        minWidth: "100%",
        padding: device == "m" ? "15vh 15vw 5vh 6vw" : "15vh 12vw 5vh 12vw",
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
      zIndex: 1000,
    }
      }}
    >
        <Title size={"4.2rem"} order={1} style={{ color: theme.colors.neutral[8], marginBottom: "auto" }}>{heading}</Title>
      <Text sx={device == "m" ? {} : {maxWidth: "50%"}} size="1rem">{children}</Text>
    </Container>
  );
}
