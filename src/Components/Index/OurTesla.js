import { Carousel } from "@mantine/carousel";
import { Button, Grid, Text, Title, useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import useDevice from "../hooks/useDevice";
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from "react";
import SubTitle from "../hooks/UI/SubTitle";

export default function OurTesla({slides}){
    const theme = useMantineTheme()
    const { height, width } = useViewportSize();
    const device = useDevice(width);
    const autoplay = useRef(Autoplay({ delay: 2000 }));
   if(device !== "l"){
    return(
        <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0vh",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            padding: "5vh 10vw",
            display: "flex",
            flexDirection: "column",
            gap: "5vh",
            alignItems: "flex-start",
          }}
        >
           <SubTitle href={"/o-nas"} device={device} label={"NAŠE TESLA"}>Čím jezdíme</SubTitle>
          <div
            style={{ position: "relative", width: "80vw", minHeight: "25vh" }}
          >
            <Image
              src={"/images/ourTesla.png"}
              layout={"fill"}
              style={{ objectFit: "cover" }}
            />
          </div>
          <Grid sx={{ width: "100%" }}>
            <Grid.Col
              span={4}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Text size={"2.5rem"} align="center" weight={700} sx={{}}>
                322
              </Text>
              <Text size={"1rem"} align="center" sx={{}}>
                km/h
              </Text>
            </Grid.Col>
            <Grid.Col
              span={4}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Text size={"2.5rem"} align="center" weight={700} sx={{}}>
                634
              </Text>
              <Text size={"1rem"} align="center" sx={{}}>
                km dojezd
              </Text>
            </Grid.Col>
            <Grid.Col
              span={4}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Text size={"2.5rem"} align="center" weight={700} sx={{}}>
                3,2
              </Text>
              <Text size={"1rem"} align="center" sx={{}}>
                s 0-100
              </Text>
            </Grid.Col>
          </Grid>
          <Text>
            Konstrukce vozu Model S umožňuje vynikající rychlost a dojezd s
            úchvatným zrychlením a může se chlubit bezkonkurenčním výkonem a
            vytříbeným designem.
          </Text>
          <SubTitle href={"/o-nas"} device={device} label={"VÝHODY"}>Proč u nás</SubTitle>
        </div>
      
        <Carousel loop withIndicators sx={{ width: "100%", height: "90vh" }}>
          {slides.map((slide, index) => {
            return (
              <Carousel.Slide
                sx={{
                  backgroundColor: slide.color,
                  width: "100%",
                  height: "90vh",
                  padding: "5vh 8vw",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div>
                    {" "}
                    <Text size="0.9rem" weight={700}>
                      {index + 1} /
                    </Text>
                    <Title size={"1.8rem"} order={3}>
                      {slide.name}
                    </Title>
                  </div>
                  <Text
                    sx={{ fontFamily: theme.other.fira_code, marginTop: "3vh" }}
                  >
                    {slide.description}
                  </Text>
                </div>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "40vh",
                  }}
                >
                  <Image
                    src={slide.img}
                    layout={"fill"}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </Carousel.Slide>
            );
          })}
        </Carousel>
        <Link href={"/sluzby"} style={{marginTop: "5vh"}}>
          <Button
            size="lg"
            rightIcon="->"
            variant="white"
            sx={{
              color: theme.colors.neutral[7],
              fontWeight: "700",
              fontSize: "1.1rem",
              marginBottom: "4vh",
            }}
          >
            Více o pronájmu
          </Button>
        </Link>
      </section>
    )
   } else{
    return(
        <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4vh",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            padding: "5vh 10vw",
            display: "flex",
            flexDirection: "column",
            gap: "5vh",
            alignItems: "flex-start",
          }}
        >
          <Title weight={600} order={2} size={"2.3rem"} style={{}}>
            Naše Tesla
          </Title>
      <div style={{display: "flex", alignItems: "start"}}>
      <div style={{}}>
        <div
            style={{ position: "relative", width: "40vw", minHeight: "50vh" }}
          >
            <Image
              src={"/images/ourTesla.png"}
              layout={"fill"}
              style={{ objectFit: "cover" }}
            />
          </div>
          <Grid sx={{ width: "100%", marginTop: "5vh" }}>
            <Grid.Col
              span={4}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Text size={"2.5rem"} align="center" weight={700} sx={{}}>
                322
              </Text>
              <Text size={"1rem"} align="center" sx={{}}>
                km za hodinu
              </Text>
            </Grid.Col>
            <Grid.Col
              span={4}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Text size={"2.5rem"} align="center" weight={700} sx={{}}>
                634
              </Text>
              <Text size={"1rem"} align="center" sx={{}}>
                km dojezd
              </Text>
            </Grid.Col>
            <Grid.Col
              span={4}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Text size={"2.5rem"} align="center" weight={700} sx={{}}>
                3,2
              </Text>
              <Text size={"1rem"} align="center" sx={{}}>
                sekundy z 0-100
              </Text>
            </Grid.Col>
          </Grid>
        </div>
      <div style={{padding: "5vh 5vw", display: "flex", flexDirection: "column", alignItems: "end", justifyContent: "space-between", height: "100%"}}>
      <Text sx={{lineHeight: "175%"}}>
            Konstrukce vozu Model S umožňuje vynikající rychlost a dojezd s
            úchvatným zrychlením a může se chlubit bezkonkurenčním výkonem a
            vytříbeným designem.
            Konstrukce vozu Model S umožňuje vynikající rychlost a dojezd s
            úchvatným zrychlením a může se chlubit bezkonkurenčním výkonem a
            vytříbeným designem.
            Konstrukce vozu Model S umožňuje vynikající rychlost a dojezd s
            úchvatným zrychlením a může se chlubit bezkonkurenčním výkonem a
            vytříbeným designem.
            Konstrukce vozu Model S umožňuje vynikající rychlost a dojezd s
            úchvatným zrychlením a může se chlubit bezkonkurenčním výkonem a
            vytříbeným designem.
          </Text>
          <Link href={"/o-nas"} style={{marginTop: "20vh"}} >
          {" "}
          <Button
            rightIcon={"->"}
            size="xl"
            sx={{ fontSize: "1rem", minWidth: "25vh" }}
            radius={60}
            color={"dark"}
          >
            O našem autě
          </Button>
        </Link>
      </div>
      </div>
        </div>
        <Carousel  plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}  loop withIndicators sx={{ width: "80%", height: "60vh", marginLeft: "auto", marginRight: "auto" }}>
          {slides.map((slide, index) => {
            return (
              <Carousel.Slide
                sx={{
                  backgroundColor: slide.color,
                  width: "100%",
                  height: "60vh",
                  padding: "5vh 8vw",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div>
                    {" "}
                    <Text size="0.9rem" weight={700}>
                      {index + 1} /
                    </Text>
                    <Title size={"1.8rem"} order={3}>
                      {slide.name}
                    </Title>
                  </div>
                  </div>
               <div style={{display: "flex", alignItems: "self-start"}}>
               <Text
                    sx={{ fontFamily: theme.other.fira_code, marginTop: "3vh" }}
                  >
                    {slide.description}
                  </Text>
               
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "40vh",
                  }}
                >
                  <Image
                    src={slide.img}
                    layout={"fill"}
                    style={{ objectFit: "contain" }}
                  />
                </div>
               </div>
              </Carousel.Slide>
            );
          })}
        </Carousel>
        <Link href={"/sluzby"}>
          <Button
            size="lg"
            rightIcon="->"
            variant="white"
            sx={{
              color: theme.colors.neutral[7],
              fontWeight: "700",
              fontSize: "1.1rem",
              marginBottom: "4vh",
              marginLeft: "8.5vw"
            }}
          >
            Více o pronájmu
          </Button>
        </Link>
      </section>
    )
   }
}