
import React from "react";
import {
  Container,
  Grid,
  Col,
  Paper,
  Text,
  createStyles,
  useMantineTheme,
  Group,
  Button,
  Space,
  Title,
  ActionIcon,
} from "@mantine/core";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Logo from "../../../../public/images/JirkaLogo.png"; 
import Image from "next/image";
import { useClipboard, useViewportSize } from "@mantine/hooks";
import {BiCopy} from "react-icons/bi"
import useDevice from "../useDevice";

function FooterItem({name, value, children}){
  const clipboard = useClipboard({ timeout: 500 });
  const { height, width } = useViewportSize();
  const device = useDevice(width);
return(
  <div style={device !== "l" ? {} : {width: "100%"}}>
  
    <svg xmlns="http://www.w3.org/2000/svg" width={device !== "l" ? "92vw" : "100%"} height="4" viewBox={device !== "l" ? "0 0 398 4" : "0 0 400 4"} fill="none">
  <path d="M2 2H399" stroke="#19E3C5" stroke-opacity="0.5" stroke-width="5" stroke-linecap="round"/>
</svg>
<div style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1vh 5vw 0 0"}}>
  <div  onClick={()=> {clipboard.copy(value)}}>
  <Text weight={500} size={"xl"}>{children}</Text>
  <Text>{name}</Text>
  </div>
  <ActionIcon size={"xl"} color="dark" sx={{fontWeight: "600"}} onClick={()=> {clipboard.copy(value)}}><BiCopy /></ActionIcon>
</div>

  </div>
)
}
export default function Footer() {
  const { height, width } = useViewportSize();
  const device = useDevice(width);
  console.log(device);
  const theme = useMantineTheme();
  const useStyles = createStyles((theme) => ({
   
  }));

  const { classes } = useStyles();
  const clipboard = useClipboard({ timeout: 500 });
  if(device == "m"  || device == "t" ){
    return (
      <footer style={{minHeight: "max-content", height: "65vh", display: "flex", flexDirection: "column"}}>
      <div style={{backgroundColor: theme.colors.cyan[1], padding: "3vh 0"}}>
      <div style={{display: "flex", alignItems: "center", justifyContent: "left" ,padding: "0 5vw 2vh 5vw", gap: "4vw"}}>
            <Image src={Logo} width={50} height={50} style={{}} />
                <div>
                  <Text size={"2rem"} color={theme.colors.neutral[7]} weight={500} sx={{fontFamily: theme.other.chivo}}>
                    Jirkova Tesla
                  </Text>
                </div>
             
          </div>
          <Text sx={{padding : "0 8vw"}}>Váš poskytovatel jízních zážitků a služeb v Brně</Text>
      </div>
        <div size={"xl"} style={{backgroundColor: theme.colors.neutral[0],padding: "2vh 0", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "end", minHeight: "fit-content", gap: "2vh"}}>
      <FooterItem value={"+420 608 270 754"} name={"telefon"}>+420 608 270 754</FooterItem>
      <FooterItem value={"jirka@stesla.cz"} name={"email"}>jirka@stesla.cz</FooterItem>
      <FooterItem value={"Lipská 2444/4, 616 00, Brno"} name={"adresa"}>Lipská 2444/4, 616 00, Brno</FooterItem>
        </div>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", height: "100%", padding: "0 5vw"}}>
         <Link href={"https://jirkova-tesla.reservio.com/"}> <Text>Reservio</Text></Link>
         <Link href={"https://instagram.com/"}> <Text>Instagram</Text></Link>
        </div>
      </footer>
    );
  }
    else if(device == "l"){
      return (
        <footer style={ {minHeight: "max-content", height: "fit-content", display: "flex", backgroundColor: theme.colors.cyan[0]}}>
        <div style={{backgroundColor: theme.colors.cyan[1], padding: "3vh 0", display: "flex", flexDirection: "column"}}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "left" ,padding: "2vh 3vw 2vh 3vw", gap: device !== "l" ? "4vw" : "1vw"}}>
              <Image src={Logo} width={50} height={50} style={{}} />
                  <div>
                    <Text size={"2rem"} color={theme.colors.neutral[7]} weight={500} sx={{fontFamily: theme.other.chivo}}>
                      Jirkova Tesla
                    </Text>
                  </div>
               
            </div>
            <Text sx={{padding : device !== "l" ? "0 8vw" : "0 5.5vw"}}>Váš poskytovatel jízních zážitků a služeb v Brně</Text>
         
          <Link href={"/rezervace"} style={{marginTop: "auto", textAlign: "center" }} >
          {" "}
          <Button
            rightIcon={"->"}
            size="xl"
            
            sx={{ fontSize: "1rem", minWidth: "25vh", width: "80%"}}
            radius={60}
            color={"dark"}
          >
            Rezervovat jízdu
          </Button>
        </Link>
        </div>
    <div style={{width: "100%", display: "flex", flexDirection: "column", }}>
    <div style={{display: "flex", padding: "0 0 0 5vw", justifyContent: "space-between"}}>
         <div size={"xl"} style={{maxWidth: "50%" ,padding: "2vh 0", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "start", minHeight: "fit-content", gap: "2vh"}}>
         <Title weight={600} order={2} size={"2.3rem"} style={{}}>
          Naše info
        </Title>
        <FooterItem value={"+420 608 270 754"} name={"telefon"}>+420 608 270 754</FooterItem>
        <FooterItem value={"jirka@stesla.cz"} name={"email"}>jirka@stesla.cz</FooterItem>
        <FooterItem value={"Lipská 2444/4, 616 00, Brno"} name={"adresa"}>Lipská 2444/4, 616 00, Brno</FooterItem>
          </div>
          {device == "l" &&      <section
        style={{
          padding: "5vh 10vw",
          display: "flex",
          flexDirection: "column",
          gap: "4vh",
        }}
      >
        <Title weight={600} order={2} size={"2.3rem"} style={{}}>
          Kam dále?
        </Title>
        <Link href={"/o-nas"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="302" height="24" viewBox="0 0 302 24" fill="none">
  <path d="M301.061 13.0607C301.646 12.4749 301.646 11.5251 301.061 10.9393L291.515 1.3934C290.929 0.807611 289.979 0.807611 289.393 1.3934C288.808 1.97919 288.808 2.92893 289.393 3.51472L297.879 12L289.393 20.4853C288.808 21.0711 288.808 22.0208 289.393 22.6066C289.979 23.1924 290.929 23.1924 291.515 22.6066L301.061 13.0607ZM0 13.5H300V10.5H0V13.5Z" fill="#CDE441"/>
</svg>
<Text size={"xl"} weight={600}>O nás</Text>
        </Link>
        <Link href={"/sluzby"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="242" height="23" viewBox="0 0 242 23" fill="none">
  <path d="M241.061 12.3942C241.646 11.8084 241.646 10.8586 241.061 10.2728L231.515 0.726894C230.929 0.141108 229.979 0.141108 229.393 0.726894C228.808 1.31268 228.808 2.26243 229.393 2.84822L237.879 11.3335L229.393 19.8188C228.808 20.4046 228.808 21.3543 229.393 21.9401C229.979 22.5259 230.929 22.5259 231.515 21.9401L241.061 12.3942ZM0 12.8335H240V9.8335H0V12.8335Z" fill="#41E4CC"/>
</svg>
<Text size={"xl"} weight={600}>Služby</Text>
        </Link>
        <Link href={"/blog"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="194" height="23" viewBox="0 0 194 23" fill="none">
  <path d="M193.061 12.7272C193.646 12.1414 193.646 11.1916 193.061 10.6058L183.515 1.0599C182.929 0.474115 181.979 0.474115 181.393 1.0599C180.808 1.64569 180.808 2.59544 181.393 3.18122L189.879 11.6665L181.393 20.1518C180.808 20.7376 180.808 21.6873 181.393 22.2731C181.979 22.8589 182.929 22.8589 183.515 22.2731L193.061 12.7272ZM0 13.1665H192V10.1665H0V13.1665Z" fill="#41BDE4"/>
</svg>
<Text size={"xl"} weight={600}>Blog</Text>

        </Link>
        <Link href={"/kontakt"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="156" height="24" viewBox="0 0 156 24" fill="none">
  <path d="M154.661 13.0607C155.246 12.4749 155.246 11.5251 154.661 10.9393L145.115 1.3934C144.529 0.807611 143.579 0.807611 142.993 1.3934C142.408 1.97919 142.408 2.92893 142.993 3.51472L151.479 12L142.993 20.4853C142.408 21.0711 142.408 22.0208 142.993 22.6066C143.579 23.1924 144.529 23.1924 145.115 22.6066L154.661 13.0607ZM0 13.5H153.6V10.5H0V13.5Z" fill="#4152E4"/>
</svg>
<Text size={"xl"} weight={600}>Kontakt</Text>
        </Link>
        </section>}
         </div>
          <div style={ {display: "flex", justifyContent: "space-between", alignItems: "center", height: "100%", padding: "2vh 5vw"} }>
           <Link href={"https://jirkova-tesla.reservio.com/"}> <Text>Reservio</Text></Link>
           <Link href={"https://instagram.com/"}> <Text>Instagram</Text></Link>
          </div>
    </div>
        
        </footer>
      );
    }

}
