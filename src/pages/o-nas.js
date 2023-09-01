import PageHero from "@/Components/hooks/UI/PageHero";
import { Carousel } from "@mantine/carousel";
import { Avatar, Button, Image, Text, Title, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import { SiTesla } from "react-icons/si";
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from "react";
import Tesla from "@/Components/Onas/Tesla";
export default function Onas(){

    const theme = useMantineTheme();
    const autoplay = useRef(Autoplay({ delay: 2000 }));
    let slides = [
        {
          name: "Nabíjení zdarma",
          description:
            "Nedělejte si starosti s provozem. Díky rozrůstající se síti nabíjecích stanic Tesla Supercharger se nemusíte bát o nabíjení v Česku, ani okolních státech, kde je sít ještě rozšířenější. Navíc při pronájmu naší tesly máte zajištěno nabíjení zdarma u všech nabíjecích stanic společnosti Tesla",
          img: "/images/teslaMap.png",
          color: "#19E3C5",
        },
        {
          name: "Místo pro vše",
          description:
            "Vezměte na výlet celou rodinu. Přes sportovní ladění vozu je Tesla S též vhodným autem pro cestování za zážitky. Do kufru s objemem 722 litrů se vejdou nejen zavazadla ale i kola, lyže či jiné sportovní doplňky.",
          img: "/images/teslaKufr.png",
          color: "#19BFE3",
        },
        {
          name: "Klidná jízda",
          description:
            "Za vašeho dozoru umožňuje Autopilot vozu v rámci vašeho pruhu automaticky řídit, zrychlovat a brzdit. Pomáhá vám tak s nejnáročnější částí řízení. S over-the-air aktualizacemi jsou nejnovější funkce okamžitě k dispozici.",
          img: "/images/teslaKlid.png",
          color: "#DFE319",
        },
        {
          name: "Bezpečí na prvním místě",
          description:
            "Bezpečnost je nejdůležitější u každého vozu Tesla. Tesla S je navržena tak, aby překračovaly bezpečnostní standardy. Model S získal v roce 2022 5 hvězdiček v hodnocení bezpečnosti Euro NCAP a získal ocenění Nejlepší ve své třídě v kategoriích Executive a Pure Electric.",
          img: "/images/teslaSafe.png",
          color: "#E3AA19",
        },
      ];
      let blogPosts = [
        {
        heading: "Změna otevírací doby",
        date: "1.1.2022",
        text: "Od 17.9. do 16.10. bude provoz našich služeb na okruhu Blansko a Jindřichov omezen z důvodu úpravy povrchu trati. ",
        href: "/blog/zmena-oteviraci-doby",
        color: "#19E3C5",
      },
      {
        heading: "Změna otevírací doby",
        date: "1.1.2022",
        text: "Od 17.9. do 16.10. bude provoz našich služeb na okruhu Blansko a Jindřichov omezen z důvodu úpravy povrchu trati. ",
        href: "/blog/zmena-oteviraci-doby",
        color: "#19E3C5",
      },
      {
        heading: "Změna otevírací doby",
        date: "1.1.2022",
        text: "Od 17.9. do 16.10. bude provoz našich služeb na okruhu Blansko a Jindřichov omezen z důvodu úpravy povrchu trati. ",
        href: "/blog/zmena-oteviraci-doby",
        color: "#19E3C5",
      },
    ]
    let hodnoty = [{
        name: "Bezpečnost",
        color: theme.colors.cyan[6],
        text: "Nedělejte si starosti s provozem. Díky rozrůstající se síti nabíjecích stanic Tesla Supercharger se nemusíte bát o nabíjení v Česku, ani okolních státech, kde je sít ještě rozšířenější.",
    },
    {
        name: "Podpora",
        color: theme.colors.primary[6],
        text: "Nedělejte si starosti s provozem. Díky rozrůstající se síti nabíjecích stanic Tesla Supercharger se nemusíte bát o nabíjení v Česku, ani okolních státech, kde je sít ještě rozšířenější.",
    },
    {
        name: "Férovost",
        color: theme.colors.primaryN[0],
        text: "Nedělejte si starosti s provozem. Díky rozrůstající se síti nabíjecích stanic Tesla Supercharger se nemusíte bát o nabíjení v Česku, ani okolních státech, kde je sít ještě rozšířenější.",
    }
]

    return(
        <div style={{marginTop: "0vh"}}>
            
            <PageHero heading={"O nás"}>Jsme nadšenci do rychlých aut a inovací. Baví nás rychle jezdit na okruhu i si užívat klidné jízdy v příjemném interiéru luxusních aut. Chceme tento zážitek poskytnout i vám a proto vám nabízíme naše služby na vaší cestě.</PageHero>
            <section
        style={{
          padding: "5vh 10vw",
          display: "flex",
          flexDirection: "column",
          gap: "4vh",
        }}
      >
       <Title weight={600} order={2} size={"2.3rem"} style={{}}>
            Naše story
          </Title>
        <Text sx={{fontFamily: theme.other.fira_code}}>
        Nedělejte si starosti s provozem. Díky rozrůstající se síti nabíjecích stanic Tesla Supercharger se nemusíte bát o nabíjení v Česku, ani okolních státech, kde je sít ještě rozšířenější. Navíc při pronájmu naší tesly máte zajištěno nabíjení zdarma u všech nabíjecích stanic společnosti Tesla
        </Text>
        <div style={{display: "flex", gap: "6vw"}}>
          <Avatar size={"lg"} radius={""} color="red"><SiTesla /></Avatar>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
            <Text weight={700}>Jiří Sedláček</Text>
            <Text weight={400}>Carfan, owner</Text>
          </div>
        </div>
       
      </section>
      <section style={{ display: "flex", position: "relative", alignItems: "flex-end" }}>
    <Text 
    color={theme.colors.neutral[6]}
    size={"2rem"}
        component="p"
        sx={{ 
          
          
          maxWidth: "30%",
        
            transformOrigin: "0 0",
            transform: "rotate(-90deg) translateY(50%)",
            
            letterSpacing: "2px",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
           
            
            margin: "0",
        }}
    >
        Více fotek
    </Text>
    <Image src="/images/teslaDark.jpg" style={{ width: "100%", maxWidth: "400px", paddingLeft: "" }} />
</section>
        <section
        style={{
          padding: "5vh 10vw",
          display: "flex",
          flexDirection: "column",
          gap: "4vh",
        }}
      >
       <Title weight={600} order={2} size={"2.3rem"} style={{}}>
            Firemní hodnoty
          </Title>
        <Text sx={{fontFamily: theme.other.fira_code}}>
        Nedělejte si starosti s provozem. Díky rozrůstající se síti nabíjecích stanic Tesla Supercharger se nemusíte bát o nabíjení v Česku, ani okolních státech, kde je sít ještě rozšířenější. Navíc při pronájmu naší tesly máte zajištěno nabíjení zdarma u všech nabíjecích stanic společnosti Tesla
        </Text>
        <div style={{display: "flex", flexDirection: "column", gap: "5vh"}}>
       {hodnoty.map((hodnota, index) => {
        return(
           
            <div style={{display: "flex", flexDirection: "column", gap: "2vh"}}>
                <Title order={3}><Text component="span" color={hodnota.color ? hodnota.color : ""}>| </Text> {hodnota.name}</Title>
                <Text sx={{fontFamily: theme.other.fira_code}}>
        {hodnota.text}
        </Text>
            </div>
        )
       }) }
        </div>
        </section>
      <Tesla slides={slides}/>
      
        </div>
    )
}