import {
  Button,
  Card,
  Space,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { BsSpeedometer2 } from "react-icons/bs";
import { StatsRingCard } from "./StatsHero";
import { FeaturesCard } from "./CarHero";
import { TaskCard } from "./BlogHero";

export default function HeroDesktop() {
  const theme = useMantineTheme();
  const [icon, setIcon] = useState("-->");
  const [videoWidth, setVideoWidth] = useState(20.5);
  const [opacityS, setOpacity] = useState(1);

  useEffect(() => {
      // Přepočítáme opacity na základě videoWidth
      // Začneme s hodnotou 1 a snížíme ji na 0, jak se videoWidth zvyšuje k 80
      const calculatedOpacity = 1 - ((videoWidth - 20.5) / 79.5); 
      setOpacity(Math.max(calculatedOpacity, 0));
  }, [videoWidth]);
  const dragRef = useRef(null);

  const handleMouseDown = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const newWidth = 100 - (100 * e.clientX) / window.innerWidth;
    if(newWidth < 100){
      setVideoWidth(newWidth);
    }
  };

  return (
    <section
    style={{
        position: "relative",
        width: "100%",
        minHeight: "80vh",
        height: "fit-content",
        maxHeight: "80vh",
        backgroundColor: "#FF7676",
        borderRadius: "0 0 25px 25px",
        display: "flex",
        justifyContent: "space-between",
    }}
>
      <div
        style={{
          zIndex: 2,
          width: "50%",
          padding: "15vh 10vw 8vh 10vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ backgroundColor: "#FF7676", padding: "3vh 3vh" }}>
          <Title order={1} size={"4.5rem"}>
            Vaše jízda, <br />
            naše starost
          </Title>
          <Space h={theme.spacing.md} />
          <Text>
            Jsme nadšenci do rychlých aut a inovací. Baví nás rychle jezdit na
            okruhu i si užívat klidné jízdy v příjemném interiéru luxusních aut.
            Chceme tento zážitek poskytnout i vám a proto vám nabízíme naše
            služby na vaší cestě.
          </Text>
        </div>

        <div
          style={{ display: "flex", alignItems: "center", marginTop: "auto" }}
        >
          <Link href={"/rezervace"} style={{}}>
            <Button
              rightIcon={icon}
              size="xl"
              sx={{
                fontSize: "1rem",
                minWidth: "25vh",
                transition: "all 0.3s ease",
              }}
              radius={60}
              color={"dark"}
              onMouseEnter={() => setIcon("--->")}
              onMouseLeave={() => setIcon("-->")}
            >
              Pojďme jezdit
            </Button>
          </Link>
          <Link href={"/onas"}>
            <Button
              size="lg"
              rightIcon=""
              variant="white"
              sx={{
                color: theme.colors.neutral[7],
                backgroundColor: "transparent",
                fontWeight: "700",
                fontSize: "1rem",
              }}
            >
              Více o nás
            </Button>
          </Link>
        </div>
      </div>
      <div
                ref={dragRef}
                style={{
                    zIndex: videoWidth > 42 ? 2 : 10,
                    opacity: videoWidth > 42 ? 1 : 0.7,
                    position: "absolute",
                    right: `${videoWidth - 1}%`,
                    top: "75%",
                    height: "20%",
                    cursor: "ew-resize",
                    width: "5px",
                    backgroundColor: "#FF7676",
                }}
                onMouseDown={handleMouseDown}
            ></div>
       <div
                style={{
                    position: "absolute",
                    top: "55%",
                    left: `${102.5 - 45}%`,  // Centered within the 45% right section of the video
                    zIndex: 3,
                    opacity: opacityS,
                    display: "flex",
                    width: "40vw",
                    maxWidth: "900px",
                    alignItems: "flex-end",
                    transform: "translateY(-50%)", // Center vertically
                    gap: "2vh",
                    borderRadius: "25px",
                }}
            >
                <Link href={"/sluzby"} style={{width: "100%", height: "100%"}}><FeaturesCard /></Link>
                <div style={{ display: "flex", flexDirection: "column", gap: "3vh", justifyContent: "space-between", height: "100%" }}>
                    <Link href={"/rezervace"}><StatsRingCard /></Link>
                    <Link href={"/blog"}><TaskCard /></Link>
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: `${videoWidth}%`,
                    zIndex: 1,
                }}
            >
                <video
                    src="/video/mainTesla.mov"
                    autoPlay
                    muted
                    loop
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "0 0 25px 0",
                    }}
                />
            </div>
        </section>
    );
}