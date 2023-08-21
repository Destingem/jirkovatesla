import PageHero from "@/Components/hooks/UI/PageHero";
import hexToRGBA from "@/Components/hooks/hexToRGBA";
import { Button, Text, Title, useMantineTheme } from "@mantine/core";
import Link from "next/link";

export default function Blog() {
  const theme = useMantineTheme();
  let prispevky = [
    {
      name: "Změna otevírací doby",
      date: "1/9/2004",
      text: "Od 17.9. do 16.10. bude provoz našich služeb na okruhu Blansko a Jindřichov omezen z důvodu úpravy povrchu trati. ",
      href: "",
      color: "#41E4C7",
      img: "",
    },
    {
        name: "Změna otevírací doby",
        date: "1/9/2004",
        text: "Od 17.9. do 16.10. bude provoz našich služeb na okruhu Blansko a Jindřichov omezen z důvodu úpravy povrchu trati. ",
        href: "",
        color: "",
        img: "#41E4C7",
      },
      {
        name: "Změna otevírací doby",
        date: "1/9/2004",
        text: "Od 17.9. do 16.10. bude provoz našich služeb na okruhu Blansko a Jindřichov omezen z důvodu úpravy povrchu trati. ",
        href: "",
        color: "#41E4C7",
        img: "",
      },
  ];
  return (
    <div style={{ marginTop: "0vh" }}>
      <PageHero heading={"Blog"}>
        Jsme nadšenci do rychlých aut a inovací. Baví nás rychle jezdit na
        okruhu i si užívat klidné jízdy v příjemném interiéru luxusních aut.
        Chceme tento zážitek poskytnout i vám a proto vám nabízíme naše služby
        na vaší cestě.
      </PageHero>
      <div>
        {prispevky.map(({ name, date, text, href, color, img }, index) => {
          return (
            <div>
            <div
  style={{
    height: "30vh",
    minHeight: "230px",
    padding: "5vh 10vw 0 10vw",
    position: "relative", // Přidáno kvůli absolutnímu pozicování ::before pseudo-elementu
    backgroundColor: hexToRGBA("#41E4C7", 0.75), // Předpokládám, že chcete průhlednost 0.75
    zIndex: 1,
  }}
>
  <div
    style={{
      content: "",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: img ? img : "url(/images/backgroundAbstract.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.75,  // Průhlednost 0.75 pro background obrázek
      zIndex: -1,
    }}
  ></div>
  <Title weight={600} order={2} size={"2.3rem"} style={{}}>
    {name}
  </Title>
</div>
            <div style={{padding: "5vh 10vw", display: "flex", flexDirection: "column", gap: "2vh"}}>
            <Text size="md">{date}</Text>
              <Text>{text}</Text>
              <Link href={href ? href : "#"} style={{}}>
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
                  {"Číst dále"}
                </Button>
              </Link>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
