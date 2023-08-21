import { Button, Container, Image, Text, Title, useMantineTheme } from "@mantine/core";
import notFound from "../../public/images/404.png";
import Link from "next/link";

export default function Custom404() {
    const theme = useMantineTheme();
    return(
        <Container size={"100%"} sx={{padding: "10vh 0 30vh 0", display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh"}} >
        <Image src={notFound.src} fill style={{}} />
        <Title align="center" order={1} >Nenašli jsme to</Title>
        <Text sx={{padding: "0 5vw"}}>Stránka kterou jste hledali nebyla nalezena. <br /> Je možné že byla přesunuta či odstraněna</Text>
       <Link href={"/"} style={{marginTop: "3vh"}}> <Button size="xl" sx={{fontSize: "1rem"}} radius={60} color={"dark"}>Zpět na hlavní stránku</Button></Link>
        </Container>
    )
  }