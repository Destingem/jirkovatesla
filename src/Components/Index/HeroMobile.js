import { ActionIcon, Button, Divider, Space, Text, Title, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md";
import { RiArrowDownDoubleLine, RiArrowUpDoubleLine } from "react-icons/ri";
export default function HeroMobile() {
  const theme = useMantineTheme();
  const [videoWidth, setVideoWidth] = useState(30);

  const handleExpandVideo = () => {
    if (videoWidth === 100) {
      setVideoWidth(30);
    }
    else {
      setVideoWidth(100);
    }
  };

  return (
    <section style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: `${videoWidth * 1}%`,
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
            borderRadius: "0 0 25px 25px",
            zIndex: 0,
            position: "absolute",
          }}
        />
       <ActionIcon
       size={"10rem"}
            onClick={handleExpandVideo}
            sx={{
              zIndex: 3,
              backgroundColor: "transparent !important",
              border: "none",
              fontSize: "6rem",
              color: "rgba(255, 118, 118, 1)",
              marginTop: videoWidth !== 100 ? "15vh" : "75vh",
            }}
          >
           {videoWidth !== 100 ? <RiArrowUpDoubleLine  /> :  <RiArrowDownDoubleLine  />}
          </ActionIcon>
      </div>
      <div style={{ minHeight: "100vh", height: "fit-content", maxHeight: "110vh", borderRadius: "0 0 25px 25px ", zIndex: 1, position: "relative", }}>
        <div style={{ backgroundColor: videoWidth !== 100 ? theme.colors.cyan[1] : "transparent", padding: "12vh 5vw 10vh 5vw", minHeight: "90vh", display: "flex", flexDirection: "column", gap: "2vh" }}>
          <Title order={1} size={"3.25rem"} sx={{zIndex: 100, position: "relative"}}>
            Vaše jízda, <br />
            naše starost
          </Title>
     
          <Text>
            Jsme nadšenci do rychlých aut a inovací. Baví nás rychle jezdit na
            okruhu i si užívat klidné jízdy v příjemném interiéru luxusních aut.
            Chceme tento zážitek poskytnout i vám a proto vám nabízíme naše
            služby na vaší cestě.
          </Text>
       
          <Link href={"/rezervace"} style={{width: "100%", marginTop: "auto", marginBottom: "15vh"}}>
            <Button
              rightIcon={"-->"}
              size="xl"
              sx={{
                fontSize: "1rem",
                minWidth: "70vw",
                width: "100%",
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
        </div>
      </div>
    </section>
  );
}
