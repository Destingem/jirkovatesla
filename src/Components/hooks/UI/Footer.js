
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
        <footer style={{minHeight: "max-content", height: "65vh", display: "flex", flexDirection: "column"}}>
        <div style={{backgroundColor: theme.colors.cyan[1], padding: "3vh 0"}}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "left" ,padding: "0 5vw 2vh 5vw", gap: device !== "l" ? "4vw" : "1vw"}}>
              <Image src={Logo} width={50} height={50} style={{}} />
                  <div>
                    <Text size={"2rem"} color={theme.colors.neutral[7]} weight={500} sx={{fontFamily: theme.other.chivo}}>
                      Jirkova Tesla
                    </Text>
                  </div>
               
            </div>
            <Text sx={{padding : device !== "l" ? "0 8vw" : "0 5.5vw"}}>Váš poskytovatel jízních zážitků a služeb v Brně</Text>
        </div>
         <div style={{display: "flex", padding: "0 0 0 5vw"}}>
         <div size={"xl"} style={{maxWidth: "50%" ,backgroundColor: theme.colors.neutral[0],padding: "2vh 0", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "end", minHeight: "fit-content", gap: "2vh"}}>
        <FooterItem value={"+420 608 270 754"} name={"telefon"}>+420 608 270 754</FooterItem>
        <FooterItem value={"jirka@stesla.cz"} name={"email"}>jirka@stesla.cz</FooterItem>
        <FooterItem value={"Lipská 2444/4, 616 00, Brno"} name={"adresa"}>Lipská 2444/4, 616 00, Brno</FooterItem>
          </div>

         </div>
          <div style={device !== "l" ? {display: "flex", justifyContent: "space-between", alignItems: "center", height: "100%", padding: "0 5vw"} : {display: "flex", justifyContent: "left", alignItems: "center", height: "100%", padding: "0 5vw", gap: "5vw"} }>
           <Link href={"https://jirkova-tesla.reservio.com/"}> <Text>Reservio</Text></Link>
           <Link href={"https://instagram.com/"}> <Text>Instagram</Text></Link>
          </div>
        </footer>
      );
    }

}
