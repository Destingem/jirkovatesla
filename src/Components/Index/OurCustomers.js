import { Avatar, Blockquote, Button, Text, Title, useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import useDevice from "../hooks/useDevice";
import { SiTesla } from "react-icons/si";
import Link from "next/link";
export default function OurCustomers(){
    const theme = useMantineTheme()
    const { height, width } = useViewportSize();
    const device = useDevice(width);
   if(device !== "l"){
    return(
        <section
        style={{
          padding: "5vh 10vw",
          display: "flex",
          flexDirection: "column",
          gap: "4vh",
        }}
      >
        <Title weight={600} order={2} size={"2.3rem"} style={{}}>
          Naši zákazníci
        </Title>
        <Text sx={{fontFamily: theme.other.fira_code}}>
          Moc milý a ochotný pan, který i přes naše drobný problémy se choval
          moc hezky, vše vysvětlil, zodpověděl, ukázal a sladil dle našich
          přání. A i dost nad naše očekávání. Takže po 20 minutách mi přišlo jak
          když jsme přišli i s ním. Odpovídal i na otázky ze soukromí, na které
          nemusel. Moc jsme si to užili. Takže pro všechny kdo se rozhodují –
          jděte do toho!!!
        </Text>
        <div style={{display: "flex", gap: "6vw"}}>
          <Avatar size={"lg"} radius={""} color="red"><SiTesla /></Avatar>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
            <Text weight={700}>Alena Špačková</Text>
            <Text weight={400}>zážitková jízda na okruhu</Text>
          </div>
        </div>
        <Link href={"/o-nas"}>
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
            Chci zážitek jako Alena
          </Button>
        </Link>
      </section>
        ) 
   } else {
    return(
        <section
        style={{
          padding: "5vh 10vw",
          display: "flex",
          flexDirection: "column",
          gap: "4vh",
        }}
      >
        <Title weight={600} order={2} size={"2.3rem"} style={{}}>
          Naši zákazníci
        </Title>
      <Blockquote >
      <Text sx={{fontFamily: theme.other.fira_code, padding: "2vh 10vw"}}>
          Moc milý a ochotný pan, který i přes naše drobný problémy se choval
          moc hezky, vše vysvětlil, zodpověděl, ukázal a sladil dle našich
          přání. A i dost nad naše očekávání. Takže po 20 minutách mi přišlo jak
          když jsme přišli i s ním. Odpovídal i na otázky ze soukromí, na které
          nemusel. Moc jsme si to užili. Takže pro všechny kdo se rozhodují –
          jděte do toho!!!
        </Text>
      </Blockquote>
        <div style={{display: "flex", gap: "6vw", marginLeft: "13vw"}}>
          <Avatar size={"lg"} radius={""} color="red"><SiTesla /></Avatar>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
            <Text weight={700}>Alena Špačková</Text>
            <Text weight={400}>zážitková jízda na okruhu</Text>
          </div>
        </div>
        <Link href={"/o-nas"}>
          <Button
            size="lg"
            rightIcon="->"
            variant="white"
            sx={{
              color: theme.colors.neutral[7],
              fontWeight: "700",
              fontSize: "1.1rem",
              marginTop: "4vh",
              marginBottom: "4vh",
            }}
          >
            Chci zážitek jako Alena
          </Button>
        </Link>
      </section>
        )
   }
}