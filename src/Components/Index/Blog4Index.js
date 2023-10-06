import { Button, Grid, Text, Title, useMantineTheme } from "@mantine/core";
import hexToRGBA from "../hooks/hexToRGBA";
import Link from "next/link";

export default function Blog4Index({blog, device}){
    const theme = useMantineTheme();
console.log(blog)
    return (
        <div style={{ marginTop: "0vh" }}>
         
        {device == "m" &&   <div>
            {blog.map((thisBlog, index) => {
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
          backgroundImage: thisBlog?.attributes?.nahledovka?.data?.attributes?.url ? "url(http://38.242.151.80:1336" + thisBlog.attributes.nahledovka.data.attributes.url + ")" : "url(/images/backgroundAbstract.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.75,  // Průhlednost 0.75 pro background obrázek
          zIndex: -1,
        }}
      ></div>
      <Title weight={600} order={4} size={"2.3rem"} style={{}}>
      {thisBlog?.attributes?.nazev}
      </Title>
    </div>
                <div style={{padding: "5vh 10vw", display: "flex", flexDirection: "column", gap: "2vh"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
             <Text size="md" weight={700}>{new Date(thisBlog?.attributes?.datum).toLocaleDateString()}</Text>
             <Text size="md" weight={500}>{thisBlog?.attributes?.autor}</Text>
             </div>
                  <Text>{thisBlog?.attributes?.kratky_popis}</Text>
                  <Link  href={thisBlog?.attributes?.nazev ? "/blog/" + thisBlog?.attributes?.nazev.toLowerCase().replace(" ", "").normalize('NFD').replace(/[\u0300-\u036f]/g, '') :"#"} style={{}}>
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
          </div>}
          {device !== "m" &&   <Grid sx={{margin: "3vh 0"}}>
            {blog.map((thisBlog, index) => {
              return (
                <Grid.Col span={3} >
                <div
      style={{
        height: "30vh",
        minHeight: "230px",
        padding: "5vh 2vw",
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
          backgroundImage: thisBlog?.attributes?.nahledovka?.data?.attributes?.url ? "url(http://38.242.151.80:1336" + thisBlog.attributes.nahledovka.data.attributes.url + ")" : "url(/images/backgroundAbstract.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.75,  // Průhlednost 0.75 pro background obrázek
          zIndex: -1,
        }}
      ></div>
      <Title weight={600} order={2} size={"2.3rem"} style={{}}>
        {thisBlog?.attributes?.nazev}
      </Title>
    </div>
                <div style={{padding: "3vh 2vw", display: "flex", flexDirection: "column", gap: "2vh", backgroundColor: theme.colors.cyan[0]}}>
             <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
             <Text size="md" weight={700}>{new Date(thisBlog?.attributes?.datum).toLocaleDateString()}</Text>
             <Text size="md" weight={500}>{thisBlog?.attributes?.autor}</Text>
             </div>
                  <Text>{thisBlog?.attributes?.kratky_popis}</Text>
                  <Link href={thisBlog?.attributes?.nazev ? "/blog/" + thisBlog?.attributes?.nazev.toLowerCase().replace(" ", "").normalize('NFD').replace(/[\u0300-\u036f]/g, '') :"#"} style={{}}>
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
                </Grid.Col>
              );
            })}
          </Grid>}
        </div>
      );
}