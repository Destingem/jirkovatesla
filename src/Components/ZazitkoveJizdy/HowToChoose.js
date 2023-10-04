import { Button, Text } from "@mantine/core";
import SubTitle from "../hooks/UI/SubTitle";
import OurOptions from "./OurOptions";
import Image from "next/image";
import Link from "next/link";


export default function HowToChoose({ device, howTo }) {
  if(device == "m"){
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "4vh", padding: "0 10vw" }}>
        {" "}
        <SubTitle href={"#"} device={device} label={"VÝBĚR"}>
          {howTo.name}
        </SubTitle>
        <Text>
          {howTo.text}
        </Text>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6vh" }}>
         {howTo.items.map((option, index)=> {
  
          return(
            <OurOptions device={device} num={index + 1} heading={option.heading}>
             {option.text}
            </OurOptions>
          )
         })}
          </div>
          <div
            style={{
              minWidth: "100%",
              marginTop: "5vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/images/teslaAbout.png"
              width={600}
              height={600}
              layout="responsive"
              alt="Tesla"
              style={{ margin: "auto 0", zIndex: "2" }}
            />
            <Image
              src="/images/place1.svg"
              width={600}
              height={600}
              layout="responsive"
              alt="Tesla"
              style={{
                margin: "auto 0",
                position: "absolute",
                right: "-10vw",
                maxWidth: "70%",
              }}
            />
          </div>
        </div>
        <Link href={"/o-nas"} style={{ marginTop: "auto" }}>
          <Button
            size="lg"
            rightIcon="->"
            variant="filled"
            color="red"
            sx={{
              backgroundColor: "#e21837",
              width: "100%",
              fontWeight: "700",
              fontSize: "1.1rem",
              marginTop: "auto",
              marginBottom: "1vh",
              borderRadius: "25px",
            }}
          >
            Vybrat svoji jízdu
          </Button>
        </Link>
      </div>
    );
  } else if(device == "t"){
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "3vh", }}>
        {" "}
        <SubTitle href={"#"} device={device} label={"VÝBĚR"}>
        {howTo.name}
        </SubTitle>
        <Text>
        {howTo.text}
        </Text>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8vh" }}>
         {howTo.items.map((option, index)=> {
  
          return(
            <OurOptions device={device} num={index + 1} heading={option.heading}>
             {option.text}
            </OurOptions>
          )
         })}
          </div>
          <div
            style={{
              minWidth: "40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/images/teslaAbout.png"
              width={600}
              height={600}
              layout="responsive"
              alt="Tesla"
              style={{ margin: "auto 0", zIndex: "2" }}
            />
            <Image
              src="/images/place1.svg"
              width={600}
              height={600}
              layout="responsive"
              alt="Tesla"
              style={{
                margin: "auto 0",
                position: "absolute",
                right: "-10vw",
                maxWidth: "70%",
              }}
            />
          </div>
        </div>
        <Link href={"/o-nas"} style={{ marginTop: "auto" }}>
          <Button
            size="lg"
            rightIcon="->"
            variant="filled"
            color="red"
            sx={{
              backgroundColor: "#e21837",
              fontWeight: "700",
              fontSize: "1.1rem",
              marginTop: "auto",
              marginBottom: "1vh",
              borderRadius: "25px",
            }}
          >
            Vybrat svoji jízdu
          </Button>
        </Link>
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
        {" "}
        <SubTitle href={"#"} device={device} label={"VÝBĚR"}>
        {howTo.name}
        </SubTitle>
        <Text>
        {howTo.text}
        </Text>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8vh" }}>
         {howTo.items.map((option, index)=> {
  
          return(
            <OurOptions device={device} num={index + 1} heading={option.heading}>
             {option.text}
            </OurOptions>
          )
         })}
          </div>
          <div
            style={{
              minWidth: "40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/images/teslaAbout.png"
              width={600}
              height={600}
              layout="responsive"
              alt="Tesla"
              style={{ margin: "auto 0", zIndex: "2" }}
            />
            <Image
              src="/images/place1.svg"
              width={600}
              height={600}
              layout="responsive"
              alt="Tesla"
              style={{
                margin: "auto 0",
                position: "absolute",
                right: "-10vw",
                maxWidth: "70%",
              }}
            />
          </div>
        </div>
        <Link href={"/o-nas"} style={{ marginTop: "auto" }}>
          <Button
            size="lg"
            rightIcon="->"
            variant="filled"
            color="red"
            sx={{
              backgroundColor: "#e21837",
              fontWeight: "700",
              fontSize: "1.1rem",
              marginTop: "auto",
              marginBottom: "1vh",
              borderRadius: "25px",
            }}
          >
            Vybrat svoji jízdu
          </Button>
        </Link>
      </div>
    );
  }
}
