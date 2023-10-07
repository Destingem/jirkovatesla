import { Grid, Skeleton, Text } from "@mantine/core";
import SubTitle from "../hooks/UI/SubTitle";
import Link from "next/link";
import Image from "next/image";

export default function Hero({ device, theme, hero }) {
  if(device == "l"){
    return (
  
    
      <div style={{ display: "flex" }}>
        <div style={{display: "flex", flexDirection: "column", gap: "2vh"}}>
        <SubTitle href={"#"} device={device} label={"O ZÁŽITKOVÉ JÍZDĚ"}>
        {hero?.name}
      </SubTitle>
          <Text sx={{ maxWidth: "40%" }}>
         
          {hero?.subText}
          </Text>
        </div>
        <div style={{ minWidth: "40%", maxWidth: "45%" }}>
          <Grid
            gutter={"0"}
            sx={{ aspectRatio: "1", width: "100%", height: "100%" }}
          >
            <Grid.Col
              span={6}
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                aspectRatio: "1",
                padding: "0.5vw",
              }}
            >
              <Link href=  {hero?.block1?.href}>
                <Text
                  align="center"
                  component="p"
                  weight={600}
                  sx={{ color: theme.colors.neutral[8] }}
                >
                  {hero?.block1?.text}
                </Text>
              </Link>
            </Grid.Col>
            <Grid.Col span={6}>
           
             <div  style={{ aspectRatio: 1, position: "relative" }}>
             <Image
                sx={{ aspectRatio: 1 }}
                fill
                radius="md"
                objectFit="cover"
                animate={true}
                
                src={"https://cms.tesla.ondrejzaplatilek.cz" + hero?.img1?.data?.attributes?.url}
              />
             </div>
            </Grid.Col>
            <Grid.Col span={6} sx={{ position: "relative" }}>
            <div  style={{ aspectRatio: 1, position: "relative" }}>
             <Image
                sx={{ aspectRatio: 1 }}
                fill
                radius="md"
                objectFit="cover"
                animate={true}
                
                src={"https://cms.tesla.ondrejzaplatilek.cz" + hero?.img2?.data?.attributes?.url}
              />
             </div>
            </Grid.Col>
            <Grid.Col
              span={6}
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                padding: "0.5vw"
              }}
            >
              <Link href={hero?.block2?.href} >
                <Text
                  align="center"
                  component="p"
                  weight={700}
                  sx={{ color: theme.colors.primary[9] }}
                >
                    {hero?.block2?.text}
                </Text>
              </Link>
            </Grid.Col>
          </Grid>
        </div>
      </div>
 
  );
  } else {
    return (
  
    
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{display: "flex", flexDirection: "column", gap: "2vh", padding: "2vh 10vw"}}>
        <SubTitle href={"#"} device={device} label={"O ZÁŽITKOVÉ JÍZDĚ"}>
        {hero?.name}
      </SubTitle>
          <Text>
          {hero?.subText}
          </Text>
        </div>
        <div style={{ width: "100%"}}>
          <Grid
            gutter={"0"}
            sx={{ aspectRatio: "1", width: "100%", height: "100%" }}
          >
            <Grid.Col
              span={6}
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                aspectRatio: "1",
                padding: "0.5vw",
                backgroundColor: theme.colors.primary[1]
              }}
            >
              <Link href={hero?.block1?.href}>
                <Text
                  align="center"
                  component="p"
                  weight={600}
                  sx={{ color: theme.colors.neutral[8] }}
                >
                  {hero?.block1?.text}
                </Text>
              </Link>
            </Grid.Col>
            <Grid.Col span={6}>
           
             <div  style={{ aspectRatio: 1, position: "relative" }}>
             <Image
                sx={{ aspectRatio: 1 }}
                fill
                radius="md"
                objectFit="cover"
                animate={true}
                
                src={"https://cms.tesla.ondrejzaplatilek.cz" + hero?.img1?.data?.attributes?.url}
              />
             </div>
            </Grid.Col>
            <Grid.Col span={6} sx={{ position: "relative" }}>
            <div  style={{ aspectRatio: 1, position: "relative" }}>
             <Image
                sx={{ aspectRatio: 1 }}
                fill
                radius="md"
                objectFit="cover"
                animate={true}
                
                src={"https://cms.tesla.ondrejzaplatilek.cz" + hero?.img2?.data?.attributes?.url}
              />
             </div>
            </Grid.Col>
            <Grid.Col
              span={6}
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                padding: "0.5vw",
                backgroundColor: theme.colors.primary[1]
              }}
            >
              <Link href={hero?.block2?.href}>
                <Text
                  align="center"
                  component="p"
                  weight={700}
                  sx={{ color: theme.colors.primary[9] }}
                >
                  {hero?.block2?.text}
                </Text>
              </Link>
            </Grid.Col>
          </Grid>
        </div>
      </div>
 
  );
  }
}
