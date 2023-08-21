import { Button, Divider, Text, Title, useMantineTheme } from "@mantine/core";
import Link from "next/link";

export default function SluzbaCard({
  title,
  desc,
  img,
  text,
  btnLabel,
  btnLink,
  color,
  backgroundColor,
  backgroundColor2,
  ...props
}) {
  const theme = useMantineTheme();

  return (
    <div style={{ backgroundColor: backgroundColor, position: 'relative' }}>
    <div
        style={{
            position: 'relative',
            minHeight: "240px",
            height: "fit-content",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "3vh 0 3vh 10vw",
            zIndex: 1,
            backgroundColor: backgroundColor2 ? backgroundColor2 : theme.colors.neutral[0],
        }}
    >
        <div
            style={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: img,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50%",
                opacity: 0.75,
                zIndex: -1
            }}
        ></div>
            <div>
            <Title color={theme.colors.neutral[0]} weight={600} order={2} size={"2.3rem"} style={{}}>
           {title}
          </Title>

        <Divider
          sx={{ marginTop: "2vh", width: "100%" }}
          size={"xl"}
          color={color ? color : theme.colors.teal[6]}
        />
            </div>
        <Text color={theme.colors.neutral[0]}  sx={{ padding: "2vh 10vw 0 0", lineHeight: "175%", marginTop: "2vh" }}>{desc}</Text>
      </div>
      <div
        style={{
          padding: "5vh 10vw",
          display: "flex",
          flexDirection: "column",
          gap: "5vh",
          alignItems: "flex-start",
        }}
      >
        <Text sx={{ fontFamily: theme.other.fira_code, marginTop: "3vh" }}>
          {text}
        </Text>

        <Link href={btnLink ? btnLink : "#"} style={{}}>
          <Button
            size="lg"
            rightIcon="->"
            variant="white"
            sx={{
              color: theme.colors.neutral[7],
              fontWeight: "700",
              fontSize: "1.1rem",
              paddingLeft: "0",
              backgroundColor: "transparent",
            }}
          >
            {btnLabel ? btnLabel : "Více informací"}
          </Button>
        </Link>
      </div>
    </div>
  );
}
