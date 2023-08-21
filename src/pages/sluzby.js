import SluzbaCard from "@/Components/Sluzby/SluzbaCard";
import PageHero from "@/Components/hooks/UI/PageHero";
import { Button, Divider, Text, Title, useMantineTheme } from "@mantine/core";
import Link from "next/link";
// {title, desc, img, text, btnLabel, btnLink, color, backgroundColor, ...props}
export default function Sluzby() {
  const theme = useMantineTheme();
  let questions = [
    {
     heading: "Chci řídit?",
     text: "Né každý si troufne řídit na závodním okruhu a platí to obvzláště pokud se rozhodnete zážitkovou jízdu někomu darovat. Na druhou stranu pokud jste vášnivým řidičem, patrně pro vás jízda v sedadle spolujezdce nebude to pravé."
    },
    {
        heading: "Kde chci jezdit?",
        text: "Někdo si rád vyzkouší vymáčknout z auta maximum na závodním okruhu. Jiní zase preferují delší a klidnější projížďku krajinou."
       },
       {
        heading: "Jak dlouho?",
        text: "Máte na výběr od 30 minut až po několik hodin. Pokud jde o vaši první jízdu počítejte s časem na víc, než se s autem pořádně seznámíte."
       },
]
  return (
    <div style={{ marginTop: "0vh" }}>
      <PageHero heading={"Služby"}>
        Jsme nadšenci do rychlých aut a inovací. Baví nás rychle jezdit na
        okruhu i si užívat klidné jízdy v příjemném interiéru luxusních aut.
        Chceme tento zážitek poskytnout i vám a proto vám nabízíme naše služby
        na vaší cestě.
      </PageHero>
      <section>
        <SluzbaCard
          title={"Zážitkové jízdy"}
          desc={"Zažijte maximální rychlost až 290 kilometrů za hodinu"}
          img={"url(/images/zazitkove_jizdyb.jpg)"}
          text={
            "Nedělejte si starosti s provozem. Díky rozrůstající se síti nabíjecích stanic Tesla Supercharger se nemusíte bát o nabíjení v Česku, ani okolních státech, kde je sít ještě rozšířenější. Navíc při pronájmu naší tesly máte zajištěno nabíjení zdarma u všech nabíjecích stanic společnosti Tesla"
          }
          btnLabel={"Více k zážitkovým jízdám"}
          btnLink={"/sluzby/zazitkove-jizdy"}
          color={theme.colors.primary[4]}
          backgroundColor={theme.colors.primary[1]}
          backgroundColor2={theme.colors.primary[3]}
        />
        <div
          style={{
            padding: "5vh 10vw",
            display: "flex",
            flexDirection: "column",
            gap: "4vh",
          }}
        >
          <Title weight={600} order={2} size={"2.3rem"} style={{}}>
            Jakou zvolit jízdu?
          </Title>
          <Text sx={{ lineHeight: "175%"}}>
            Důležité je aby jste si jízdu užili. K tomu často nepotřebujete 20
            kol na závodním okruhu, doporučujeme vám si to nejdříve vyzkoušet,
            třeba i jen jako spolujízdu. Vybrat vám pomohou následující
            kritéria.
          </Text>
        {questions.map(({heading, text}) => {
            return(
                <div>
          <Title
                    order={3}
                    sx={{
                      fontSize: "1.8rem",
                    
                      fontWeight: "600",
                    }}>
                        {heading}
                    </Title>
                    <Divider
          sx={{ marginTop: "2vh", width: "100%" }}
          size={"xl"}
          color={theme.colors.primary[6]}
        />
        <Text sx={{marginTop: "4vh", lineHeight: "175%"}}>
      {text}
        </Text>
          </div>
            )
        })}
        <Link href={"/sluzby/zazitkove-jizdy"} style={{width: "100%"}}>
        <Button color="red" rightIcon={"->"} size="xl" sx={{fontSize: "1rem", backgroundColor: theme.colors.primary[9], width: "100%"}}>Vyberte si svou jízdu</Button>
        </Link>
        </div>

      </section>
      <section>
        <SluzbaCard
          title={"Pronájem"}
          desc={"Užívejte si komfortu při cestování s nabíjením zdarma"}
          img={"url(/images/zazitkove_jizdyb.jpg)"}
          text={
            "Nedělejte si starosti s provozem. Díky rozrůstající se síti nabíjecích stanic Tesla Supercharger se nemusíte bát o nabíjení v Česku, ani okolních státech, kde je sít ještě rozšířenější. Navíc při pronájmu naší tesly máte zajištěno nabíjení zdarma u všech nabíjecích stanic společnosti Tesla"
          }
          btnLabel={"Více k pronájmu"}
          btnLink={"/sluzby/pronajem"}
          color={theme.colors.cyan[4]}
          backgroundColor={theme.colors.cyan[0]}
          backgroundColor2={theme.colors.cyan[5]}
        />
      </section>
      <section>
        <SluzbaCard
          title={"Taxi"}
          desc={"Spolehněte se na klidný a bezpečný odvoz"}
          img={"url(/images/zazitkove_jizdyb.jpg)"}
          text={
            "Nedělejte si starosti s provozem. Díky rozrůstající se síti nabíjecích stanic Tesla Supercharger se nemusíte bát o nabíjení v Česku, ani okolních státech, kde je sít ještě rozšířenější. Navíc při pronájmu naší tesly máte zajištěno nabíjení zdarma u všech nabíjecích stanic společnosti Tesla"
          }
          btnLabel={"Více k taxi"}
          btnLink={"/sluzby/taxi"}
          color={"#E1E471"}
          backgroundColor={"#f9f7e2"}
          backgroundColor2={"#eee9b6"}
        />
      </section>
      <section>
        <SluzbaCard
          title={"Akce"}
          desc={"Reprezentujte se s prémiovým vozem Tesla S."}
          img={"url(/images/zazitkove_jizdyb.jpg)"}
          text={
            "Nedělejte si starosti s provozem. Díky rozrůstající se síti nabíjecích stanic Tesla Supercharger se nemusíte bát o nabíjení v Česku, ani okolních státech, kde je sít ještě rozšířenější. Navíc při pronájmu naší tesly máte zajištěno nabíjení zdarma u všech nabíjecích stanic společnosti Tesla"
          }
          btnLabel={"Více k akcím"}
          btnLink={"/sluzby/akce"}
          color={"#8171E4"}
          backgroundColor={"#f0e3f9"}
          backgroundColor2={"#dab6ee"}
        />
      </section>
    </div>
  );
}
