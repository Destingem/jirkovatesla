import PageHero from "@/Components/hooks/UI/PageHero";
import Logo from "../../public/images/JirkaLogo.png"; 
import Image from "next/image";
import { Text, Title, useMantineTheme } from "@mantine/core";
import ScheduleTable from "@/Components/Kontakt/ScheduleTable";
import OurMap from "@/Components/Kontakt/Map";
import { useViewportSize } from "@mantine/hooks";
import useDevice from "@/Components/hooks/useDevice";

export default function Kontakt({main}){
  let schedule = []
  Object.keys(main.attributes).map((key, index) => {
    var key2 = ""
    switch(key){
      case "pondeli": key2 = "Pondělí"
      break;
      case "utery": key2 = "Úterý"
      break;
      case "streda": key2 = "Středa"
      break;
      case "ctvrtek": key2 = "Čtvrtek"
      break;
      case "patek": key2 = "Pátek"
      break;
      case "sobota": key2 = "Sobota"
      break;
     case  "nedele": key2 = "Neděle"
      break;
      case "prazdniny_apod": key2 = "Prázniny"
      break;
      default: return
    }

    if(key !== "id" && key !== "created_at" && key !== "updated_at" ){
      schedule.push({day: key2, hours: main.attributes[key]})
    }
  })
    const theme = useMantineTheme();
    const { height, width } = useViewportSize();
    const device = useDevice(width);
    var infos = [
        { heading: "email", content: "jirka@jirkovatesla.cz" },
        { heading: "telefon", content: <Text sx={{fontFamily: theme.other.fira_code, lineHeight: "200%"}}>+420 722 935 327 <br /> +420 602 555 323</Text> },
    
        { heading: "datová schránka", content: "xyz52a" },
        { heading: "IČO", content: "1723599942" }
    ];
    const schedule0 = [
        { day: "Pondělí", hours: "8:00 - 16:20" },
        { day: "Úterý", hours: "9:00 - 18:00" },
        { day: "Středa", hours: "7:30 - 16:20" },
        { day: "Čtvrtek", hours: "10:00 - 13:00" },
        { day: "Pátek", hours: "13:00 - 21:00" },
        { day: "Sobota", hours: "Pouze jízdy" },
        { day: "Neděle", hours: "Pouze jízdy" }
      ];
      
   if(device !== "l"){
    return(
      <div style={{marginTop: "0vh"}}>
          <PageHero heading={"Kontakt"}>Jsme nadšenci do rychlých aut a inovací. Baví nás rychle jezdit na okruhu i si užívat klidné jízdy v příjemném interiéru luxusních aut. Chceme tento zážitek poskytnout i vám a proto vám nabízíme naše služby na vaší cestě.</PageHero>
     <section style={{display: "flex", flexDirection: "column"}}>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center" ,padding: "4vh 5vw", gap: "4vw"}}>
        <Image src={Logo} width={50} height={50} style={{}} />
            <div>
              <Text size={"2rem"} color={theme.colors.neutral[7]} weight={500} sx={{fontFamily: theme.other.chivo}}>
                Jirkova Tesla
              </Text>
            </div>
         
      </div>
      <div style={{display: "flex", flexDirection: "column", gap: "5vh", padding: "2vh 10vw"}}>
              {infos.map(({heading, content}, index)=> {
                 return(
                  <div key={index}>
                 
                  <Text weight={600} sx={{fontFamily: theme.other.fira_code}}>{heading}</Text>
                  <Text sx={{fontFamily: theme.other.fira_code, marginTop: "2vh"}}>{content}</Text>
              
                  </div>
                 )
              })}

              <Title size={"1.8rem"} order={3}>
                    Provozní doba
                  </Title>
                  <ScheduleTable schedule={schedule} />
                  <Title size={"1.8rem"} order={3}>
                    Kde nás najdete
                  </Title>
                  <Text sx={{fontFamily: theme.other.fira_code}}>Lipská 2444/4, 616 00, Brno</Text>
            </div>
            <OurMap />
            <Text align="center" sx={{padding: "5vh 5vw"}}>Jsme plátci DPH</Text>
     </section>
      </div>
  )
   } else if(device == "l"){
    return(
      <div style={{marginTop: "0vh"}}>
          <PageHero heading={"Kontakt"}>Jsme nadšenci do rychlých aut a inovací. Baví nás rychle jezdit na okruhu i si užívat klidné jízdy v příjemném interiéru luxusních aut. Chceme tento zážitek poskytnout i vám a proto vám nabízíme naše služby na vaší cestě.</PageHero>
     <section style={{display: "flex", flexDirection: "column"}}>
      <div style={{display: "flex", alignItems: "center", justifyContent: "left" ,padding: "4vh 5vw", gap: "4vw", margin: "5vh 0 0 5vw"}}>
        <Image src={Logo} width={50} height={50} style={{}} />
            <div>
              <Text size={"2rem"} color={theme.colors.neutral[7]} weight={500} sx={{fontFamily: theme.other.chivo}}>
                Jirkova Tesla
              </Text>
            </div>
         
      </div>
      <div style={{display: "flex", flexDirection: "column", gap: "5vh", padding: "2vh 10vw"}}>
  
        <div style={{display: "flex", justifyContent: "space-between"}}>
        
      <div style={{display: "flex", flexDirection: "column", gap: "5vh", height: "100%"}}>
      <Title size={"1.8rem"} order={3}>
                   Naše info
                  </Title>
              
    
      {infos.map(({heading, content}, index)=> {
                 return(
                  <div key={index}>
                 
                  <Text weight={600} sx={{fontFamily: theme.other.fira_code}}>{heading}</Text>
                  <Text sx={{fontFamily: theme.other.fira_code, marginTop: "2vh"}}>{content}</Text>
              
                  </div>
                 )
              })}
      </div>
<div style={{minWidth: "35%", display: "flex", flexDirection: "column", gap: "3vh", maxHeight: "100%"}}>
<div>
      <Title size={"1.8rem"} order={3}>
                    Kde nás najdete
                  </Title>
                  <Text sx={{fontFamily: theme.other.fira_code, marginTop: "1vh"}}>Lipská 2444/4, 616 00, Brno</Text>
      </div>
      <OurMap laptop={true}/>
</div>
        </div>
              <Title size={"1.8rem"} order={3}>
                    Provozní doba
                  </Title>
                  <ScheduleTable schedule={schedule} />
              
            </div>
          
            <Text align="center" sx={{padding: "5vh 5vw"}}>Jsme plátci DPH</Text>
     </section>
      </div>
  )
   }
}

export async function getStaticProps() {

   var main = await fetch("https://cms.tesla.ondrejzaplatilek.cz/api/oteviraci-doba?populate=deep", {
     headers: {
         Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
     }
     })
     main = await main.json()
     console.log(main);
     main = main?.data
      

       return ({
       props: {
 
        main,
        
       },
       revalidate: 60,
   })
 }