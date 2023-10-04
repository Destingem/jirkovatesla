import { FAQDetails } from "@/Components/ZazitkoveJizdy/FAQDetails";
import Hero from "@/Components/ZazitkoveJizdy/Hero";
import HowToChoose from "@/Components/ZazitkoveJizdy/HowToChoose";
import OurOptions from "@/Components/ZazitkoveJizdy/OurOptions";
import { PhotosGallery } from "@/Components/ZazitkoveJizdy/Photos";
import OurReviews from "@/Components/ZazitkoveJizdy/Reviews";
import TimeLine from "@/Components/ZazitkoveJizdy/Timeline";
import WhyUs from "@/Components/ZazitkoveJizdy/WhyUs";
import PageHero from "@/Components/hooks/UI/PageHero";
import SubTitle from "@/Components/hooks/UI/SubTitle";
import useDevice from "@/Components/hooks/useDevice";
import { Button, Grid, Paper, Skeleton, Text, Title, useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
//public/images/404.png public/images/akce.avif public/images/backgroundAbstract.jpg public/images/black_tesla.jpg public/images/heroBackground.jpg public/images/heroBackgroundb.jpg public/images/charger.avif public/images/JirkaLogo.png public/images/ourTesla.png public/images/place1.svg public/images/pronajem.jpg public/images/pronajemb.jpg public/images/taxi.avif public/images/taxib.jpg public/images/teslaAbout.png public/images/teslaDark.jpg public/images/teslaKlid.png public/images/teslaKufr.png public/images/teslaMap.png public/images/teslaSafe.png public/images/zazitkove_jizdy.avif public/images/zazitkove_jizdyb.jpg
const images = [
  {src: "/images/404.png", alt: "404"},
  {src: "/images/akce.avif", alt: "akce"},
  {src: "/images/backgroundAbstract.jpg", alt: "backgroundAbstract"},
  {src: "/images/black_tesla.jpg", alt: "black_tesla"},
  {src: "/images/heroBackground.jpg", alt: "heroBackground"},
  {src: "/images/heroBackgroundb.jpg", alt: "heroBackgroundb"},
  {src: "/images/charger.avif", alt: "charger"},
  {src: "/images/JirkaLogo.png", alt: "JirkaLogo"},
  {src: "/images/ourTesla.png", alt: "ourTesla"},
  {src: "/images/place1.svg", alt: "place1"},
  {src: "/images/pronajem.jpg", alt: "pronajem"},
  {src: "/images/pronajemb.jpg", alt: "pronajemb"},
  {src: "/images/taxi.avif", alt: "taxi"},
  {src: "/images/taxib.jpg", alt: "taxib"},
  {src: "/images/teslaAbout.png", alt: "teslaAbout"},
  {src: "/images/teslaDark.jpg", alt: "teslaDark"},
  {src: "/images/teslaKlid.png", alt: "teslaKlid"},
  {src: "/images/teslaKufr.png", alt: "teslaKufr"},
  {src: "/images/teslaMap.png", alt: "teslaMap"},
  {src: "/images/teslaSafe.png", alt: "teslaSafe"},
  {src: "/images/zazitkove_jizdy.avif", alt: "zazitkove_jizdy"},
  {src: "/images/zazitkove_jizdyb.jpg", alt: "zazitkove_jizdyb"}
]

const hero = {
  name: "Zážitková jízda v Tesle S",
  subText: "Jsme nadšenci do rychlých aut a inovací. Baví nás rychle jezdit na okruhu i si užívat klidné jízdy v příjemném interiéru luxusních aut. Chceme tento zážitek poskytnout i vám a proto vám nabízíme naše služby na vaší cestě.",
  block1 : {text: "Jaké další služby vám můžeme nabídnout?", href: "/sluzby"},
  img1 : {src: "/images/akce.avif", alt: "akce"},
  img2 : {src: "/images/akce.avif", alt: "akce"},
  block2: {text: "Kontaktujte nás", href: "/kontakt"},
  
} 
var whyUs = {
  name: "Proč jet s námi?",
 items: [
  {icon: <BsFillLightningChargeFill />, title: "1. Rychlost", text: "Jsme nadšenci do rychlých aut a inovací. Baví nás rychle jezdit na okruhu i si užívat klidné jízdy v příjemném interiéru luxusních aut. Chceme tento zážitek poskytnout i vám a proto vám nabízíme naše služby na vaší cestě."},
  {icon: <BsFillLightningChargeFill />, title: "2. Rychlost", text: "Jsme nadšenci do rychlých aut a inovací. Baví nás rychle jezdit na okruhu i si užívat klidné jízdy v příjemném interiéru luxusních aut. Chceme tento zážitek poskytnout i vám a proto vám nabízíme naše služby na vaší cestě."},
  {icon: <BsFillLightningChargeFill />, title: "3. Rychlost", text: "Jsme nadšenci do rychlých aut a inovací. Baví nás rychle jezdit na okruhu i si užívat klidné jízdy v příjemném interiéru luxusních aut. Chceme tento zážitek poskytnout i vám a proto vám nabízíme naše služby na vaší cestě."},
  {icon: <BsFillLightningChargeFill />, title: "4. Rychlost", text: "Jsme nadšenci do rychlých aut a inovací. Baví nás rychle jezdit na okruhu i si užívat klidné jízdy v příjemném interiéru luxusních aut. Chceme tento zážitek poskytnout i vám a proto vám nabízíme naše služby na vaší cestě."},
 ]


}
var firstColumn = []
var secondColumn = []
for (let i = 0; i < whyUs.items.length; i++) {
  if(i % 2 == 0){
    firstColumn.push(whyUs.items[i])
  } else {
    secondColumn.push(whyUs.items[i])
  }
  
}
whyUs.items1 = [firstColumn, secondColumn]

const timeLine = {
  name: "Jak to probíhá?",
  items: [
    {label: "1. KONTAKT", text: "Kontaktujte nás prostřednictvím formuláře, emailu nebo telefonicky. Rádi vám zodpovíme všechny vaše dotazy a domluvíme se na všech detailech."},
    {label: "2. KONTAKT", text: "Kontaktujte nás prostřednictvím formuláře, emailu nebo telefonicky. Rádi vám zodpovíme všechny vaše dotazy a domluvíme se na všech detailech."},
    {label: "3. KONTAKT", text: "Kontaktujte nás prostřednictvím formuláře, emailu nebo telefonicky. Rádi vám zodpovíme všechny vaše dotazy a domluvíme se na všech detailech."},
    {label: "4. KONTAKT", text: "Kontaktujte nás prostřednictvím formuláře, emailu nebo telefonicky. Rádi vám zodpovíme všechny vaše dotazy a domluvíme se na všech detailech."},
  ]
}
const howTo = {
name: "Jakou jízdu vybrat?",
text: "Při výběru jízdy je důležité zohlednit nasledující kritéria, bay jsme vám mohli poskytnout váš optimální jízdní zážitek",
  items: [
    { heading: "Chcete řídit?", text: "Většina našich zákazníků si přeje řídit a my jim to umožníme. Pokud si přejete řídit, tak vám nabídneme jízdu s instruktorem, který vám pomůže s ovládáním vozu a zároveň vám poradí, jak získat co největší zážitek z jízdy. Avšak chápeme, že někteří zákazníci si přejí jenom sedět na sedadle spolujezdce a užívat si jízdu. V tom případě vám nabídneme jízdu s profesionálním řidičem, který vám ukáže, co všechno je v autě možné a jak se s ním dá jezdit." },
    { heading: "Jízda městem, nebo závodění na okruhu?", text: "   Při jízdě městem či okolím města si můžete vychutnat pohodlnou jízdu v luxusním autě. V případě, že si přejete závodit na okruhu, tak vám nabídneme jízdu na okruhu v rámci našich závodních dnů. Více informací o závodních dnech naleznete na našem webu v sekci závodní dny. Dopředu raději upozorňujeme, že pro jízdu ve na pozeních komunikacích je potřeba mít řidičský průkaz skupiny B." },
    { heading: "Krátká projíždka či delší jízda?", text: " Jízdy nabízíme v různých délkách, pokud si nejste jistí, jakou délku si vybrat, tak vám doporučujeme si vybrat delší jízdu. Většina našich zákazníků si přeje delší jízdu, protože si chtějí užít co nejvíce zážitků z jízdy. V případě, že si nejste jistí, tak vám doporučujeme si vybrat delší jízdu." },
  ]
}
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
const placeholder =
  'It can’thelp but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

const faq = {
  name: "Čsto kladené dotazy",
  items:  [
    {
      id: 'reset-password',
      question: 'How can I reset my password?',
      answer: placeholder
    },
    {
      id: 'another-account',
      question: 'Can I create more than one account?',
      answer: placeholder
    },
    {
      id: 'newsletter',
      question: 'How can I subscribe to monthly newsletter?',
      answer: placeholder
    },
    {
      id: 'credit-card',
      question: 'Do you store credit card information securely?',
      answer: placeholder
    },
    {
      id: 'payment',
      question: 'What payment systems do you work with?',
      answer: placeholder
    }
  ]
}
export default function ZazitkoveJizdy() {
  const { height, width } = useViewportSize();
  const device = useDevice(width);

  const theme = useMantineTheme()
  return (
    <div style={{ marginTop: "12vh" }}>
    
      <div
        style={device !== "l" ? {
          padding: "2vh 0vw",
          display: "flex",
          flexDirection: "column",
          gap: "8vh",
        }: {
          padding: "2vh 10vw",
          display: "flex",
          flexDirection: "column",
          gap: "8vh",
        }}
      >
      
        <div style={{ width: "100%", position: "relative", height: "30vh" }}>
        <Image
                sx={{ aspectRatio: 1 }}
                fill
                radius="md"
                objectFit="cover"
                animate={true}
                
                src={"/images/404.png"}
              />
          
        </div>
        <Hero hero={hero} device={device} theme={theme}/>
        <WhyUs whyUs={whyUs} device={device} />
        <TimeLine timeLine={timeLine} device={device} />
        <HowToChoose howTo={howTo} device={device} />
      
        
          <OurReviews articles={articles} />
        
       
       
          <FAQDetails faq={faq} device={device} />
       
     
          <PhotosGallery device={device} images={images} />
  
      </div>
    </div>
  );
}
