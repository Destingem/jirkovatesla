import { ActionIcon, Avatar, Blockquote, Button, Card, Grid, Text, Title, useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import useDevice from "../hooks/useDevice";
import { SiTesla } from "react-icons/si";
import Link from "next/link";
import SubTitle from "../hooks/UI/SubTitle";
import { useReducer } from "react";
export default function OurCustomers(){
    const theme = useMantineTheme()
    const { height, width } = useViewportSize();
    const device = useDevice(width);
    const articles =  [
      {
        heading: "Recenze pana Nováka",
        label: "Bylo to něco neuvěřitelného! Naše rodina nemohla být spokojenější s tímto zážitkem. Doporučil bych to každému, kdo hledá něco unikátního.",
        author: {
          name: "Jan Novák",
          role: "rodinná dovolená",
        },
        btnLabel: "Chci zážitek jako Jan",
      },
      {
        heading: "Recenze",
        label: "Začátek byl trochu náročný, ale nakonec to byl jeden z nejlepších zážitků, které jsem kdy měl. Určitě se vrátím!",
        author: {
          name: "Petr Svoboda",
          role: "výlet s přáteli",
        },
        btnLabel: "Chci zážitek jako Petr",
      },
      {
        heading: "Recenze",
        label: "Nečekala jsem, že to bude tak úžasné. Bylo to skvělé od začátku do konce. Ráda bych poděkovala všem zúčastněným.",
        author: {
          name: "Lucie Vondráčková",
          role: "sólový výlet",
        },
        btnLabel: "Chci zážitek jako Lucie",
      },
      {
        heading: "Recenze",
        label: "Nemohl jsem uvěřit tomu, jak dobře vše bylo organizováno. Vše probíhalo hladce a bez problémů. Budu to doporučovat všem svým přátelům.",
        author: {
          name: "Tomáš Dvořák",
          role: "podnikový výlet",
        },
        btnLabel: "Chci zážitek jako Tomáš",
      },
      {
        heading: "Recenze",
        label: "Vždycky jsem chtěla vyzkoušet něco nového a tento zážitek předčil všechna moje očekávání. Budu na to vzpomínat celý život.",
        author: {
          name: "Klára Veselá",
          role: "romantický výlet",
        },
        btnLabel: "Chci zážitek jako Klára",
      },
      {
        heading: "Recenze",
        label: "Bylo to něco, co mě úplně změnilo. Teď vidím věci jinak a jsem za to moc vděčný. Určitě to zkusím znovu.",
        author: {
          name: "David Horák",
          role: "duchovní cesta",
        },
        btnLabel: "Chci zážitek jako David",
      },
    ];
    const articleReducer = (state, action) => {
      console.log(state);
      switch (action.type) {
        case "NEXT":
          // Get the next article after the currently last visible one
          const nextIndex = (state.current[2].index + 1) % articles.length;
          const nextArticle = { ...articles[nextIndex], index: nextIndex };
    
          // Get a new array of current articles without the first one and adding the next one
          return { ...state, current: [...state.current.slice(1), nextArticle] };
    
        case "PREV":
          // Get the previous article before the currently first visible one
          const prevIndex = (state.current[0].index - 1 + articles.length) % articles.length;
          const prevArticle = { ...articles[prevIndex], index: prevIndex };
    
          // Get a new array of current articles without the last one and adding the previous one to the start
          return { ...state, current: [prevArticle, ...state.current.slice(0, 2)] };
    
        default:
          return state;
      }
    };
    
    // Add an 'index' field to each article for ease of navigation
    const indexedArticles = articles.map((article, index) => ({ ...article, index }));
    
    const [currentArticles, dispatch] = useReducer(articleReducer, {
      articles: indexedArticles,
      current: indexedArticles.slice(0, 3)
    });
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
          <SubTitle href={"/o-nas"} device={device} label={"HODNOCENÍ"}>Naši zákazníci</SubTitle>
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
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "5vh 2vw",
       
        }}
      >
              <div style={{padding: "0 5vw"}}>
              <SubTitle href={"/o-nas"} device={device} label={"RECENZE"}>Naši zákazníci</SubTitle>
              </div>
                <Grid sx={{marginTop: "5vh"}}
      gutter={"xl"}
      >
   
     <>
     <Grid.Col span={3}>
         <div style={{ backgroundColor: "rgb(255, 118, 118, 0.1)", borderRadius: "25px", overflow: "hidden"}} >
        <div style={{padding: "3vh 2vw 0 2vw"}}>
        <Title order={3} size={"2rem"} style={{marginBottom: "2vh", color: theme.colors.neutral[7]}}>{currentArticles.current[0].heading}</Title>
      <Text size={"sm"} sx={{fontFamily: theme.other.fira_code,}}>
        {currentArticles.current[0].label}
        </Text>
        <div style={{display: "flex", alignItems: "center", gap: "1vw", marginTop: "2vh"}}>
          <Avatar size={"lg"} radius={""} color="red" style={{backgroundColor: "rgba(255, 118, 118, 0.2) !important"}}><SiTesla /></Avatar>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
            <Text weight={700}> {currentArticles.current[0].author.name}</Text>
            <Text weight={400}>{currentArticles.current[0].author.role}</Text>
          </div>
        </div>
        </div>
      <div style={{backgroundColor: "rgb(255, 118, 118, 0.1)", marginTop: "2vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Link href={"/o-nas"}>
          <Button
            size="lg"
            rightIcon="->"
            variant="white"
            sx={{
              color: "#e21837",
              fontWeight: "700",
              fontSize: "1.1rem",
              marginTop: "1vh",
              marginBottom: "1vh",
              backgroundColor: "transparent"
            }}
          >
            {currentArticles.current[0].btnLabel}
          </Button>
        </Link>
      </div>
      </div>
         </Grid.Col>
         <Grid.Col span={6} style={{padding: "3vh 2vw 1.5vh 2vw", margin: "", backgroundColor: "rgb(255, 118, 118, 0.1)", borderRadius: "25px" }}>
       <div style={{display: "flex", justifyContent: "space-between", alignItems: "start", flexDirection: "column", height: "100%", }}>
     <div style={{}}>
     <Title order={3} size={"2rem"} style={{marginBottom: "2vh", color: theme.colors.neutral[7]}}>{ currentArticles.current[1].heading }</Title>
      <Text sx={{fontFamily: theme.other.fira_code,}}>
         {currentArticles.current[1].label}
        </Text>
       
     </div>
  <div style={{display: "flex", flexDirection: "column", gap: "2.5vh"}}>
  <div style={{display: "flex", alignItems: "center", gap: "1vw", }}>
          <Avatar size={"lg"} radius={""} color="red"><SiTesla /></Avatar>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
            <Text weight={700}>{currentArticles.current[1].author.name}</Text>
            <Text weight={400}>{currentArticles.current[1].author.role}</Text>
          </div>
        </div>
      <Link href={"/o-nas"} style={{marginTop: "auto"}}>
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
              borderRadius: "25px"
             
            }}
          >
            {currentArticles.current[1].btnLabel}
          </Button>
        </Link>
  </div>
   
       </div>
         </Grid.Col>
         <Grid.Col span={3}>
         <div style={{ backgroundColor: "rgb(255, 118, 118, 0.1)", borderRadius: "25px", overflow: "hidden"}} >
        <div style={{padding: "3vh 2vw 0 2vw"}}>
        <Title order={3} size={"2rem"} style={{marginBottom: "2vh", color: theme.colors.neutral[7]}}>{ currentArticles.current[2].heading}</Title>
      <Text size={"sm"} sx={{fontFamily: theme.other.fira_code,}}>
        {currentArticles.current[2].label}
        </Text>
        <div style={{display: "flex", alignItems: "center", gap: "1vw", marginTop: "2vh"}}>
          <Avatar size={"lg"} radius={""} color="red"><SiTesla /></Avatar>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
            <Text weight={700}>{currentArticles.current[2].author.name}</Text>
            <Text weight={400}>{currentArticles.current[2].author.role}</Text>
          </div>
        </div>
        </div>
      <div style={{backgroundColor: "rgb(255, 118, 118, 0.1)", marginTop: "2vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Link href={"/o-nas"}>
          <Button
            size="lg"
            rightIcon="->"
            variant="white"
            sx={{
              color: "#e21837",
              fontWeight: "700",
              fontSize: "1.1rem",
              marginTop: "1vh",
              marginBottom: "1vh",
              backgroundColor: "transparent"
            }}
          >
           {currentArticles.current[2].btnLabel}
          </Button>
        </Link>
      </div>
      </div>
         </Grid.Col>
     </>
        
      </Grid>
     <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "2vw", marginTop: "4vh"}}>
     <ActionIcon size={"xl"} color="red" variant="filled" radius={"50%"} onClick={()=> {dispatch({ type: "PREV" });}}>{"<-"}</ActionIcon>
       <ActionIcon size={"xl"} color="red" variant="filled" radius={"50%"} onClick={()=> {dispatch({ type: "NEXT" });}}>{"->"}</ActionIcon>
     </div>
      </div>
        )
   }
}