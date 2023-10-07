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
/*

*/
export default function ZazitkoveJizdy({items2}) {
  console.log(items2)
  const hero = items2?.hero
  const whyUs = {name: items2?.whyUs_name, items: items2?.whyUs_items}
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

  const timeLine = {name: items2?.timeLine_name, items: items2?.timeLine_items}
  const howTo = {name: items2?.howTo_name, text: items2?.howTo_text, items: items2?.howTo_items}
  const articles = items2?.articles
  const faq = {name: items2?.faq_name, items: items2?.faq_items}
  const images = items2?.images.data
  const mainImage = items2?.mainImage
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
                
                src={"https://cms.tesla.ondrejzaplatilek.cz" + mainImage?.data?.attributes?.url}
              />
          
        </div>
        <Hero hero={hero} device={device} theme={theme}/>
        <WhyUs whyUs={whyUs} device={device} />
        <TimeLine timeLine={timeLine} device={device} />
        <HowToChoose howTo={howTo} device={device} />
        <OurReviews articles={articles} />
        <FAQDetails faq={faq} device={device} />
        <PhotosGallery device={device} images={images} />
  {/*
       
    
      
      
        
    
        
       
       
       
       
     
        
  */}
  
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // recenze
  let recenze = await fetch("https://cms.tesla.ondrejzaplatilek.cz/api/pronajem?populate=deep", {
        headers: {
            Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
        }
        })
        var items2 = await recenze.json()
        items2 = items2?.data?.attributes
        

        return ({
        props: {
         items2
        },
        revalidate: 60,
    })
  }