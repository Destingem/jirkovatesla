import { Button, Card, Grid, Image, Text, Title, useMantineTheme } from "@mantine/core";

export default function OfferCard({imgSrc, name, rating, time, place, driver, desc, btnLabel, price}){
  const theme = useMantineTheme()
    return(
        <Card shadow="sm">
        <Card.Section>
            <Image src={imgSrc ? imgSrc : "/images/ourTesla.png"} fit="fill"/>
        </Card.Section>
       <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2vh"}}>
       <Title size={"1.8rem"} order={3}>
                     {name ? name : "Tesla Model S"}
                    </Title>
                    {rating &&<Rating defaultValue={rating} color="red" readOnly />}
       </div>
        <Card.Section mt={"2vh"}>
        <Grid sx={{ width: "100%", padding: "0 2vw" }} align="flex-end">
            {time && <Grid.Col
              span={4}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Text size={time.length > 10 ? "1rem" : "1.5rem"} align="center" weight={700} sx={{}}>
                {time}
              </Text>
              <Text size={"1rem"} align="center" sx={{}}>
                čas
              </Text>
            </Grid.Col>}
           {place &&  <Grid.Col
              span={4}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Text size={place.length > 10 ? "1rem" : "1.5rem"} align="center" weight={700} sx={{}}>
                {place}
              </Text>
              <Text size={"1rem"} align="center" sx={{}}>
                místo
              </Text>  </Grid.Col>}
          
          {driver &&   <Grid.Col
              span={4}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Text size={driver.length > 10 ? "1rem" : "1.5rem"} align="center" weight={700} sx={{}}>
              {driver}
              </Text>
              <Text size={"1rem"} align="center" sx={{}}>
                řízení
              </Text>
            </Grid.Col>}
          </Grid>
        </Card.Section>
        <Text mt={"2vh"} sx={{padding: "1vh 2vw"}}>
        {desc}

        </Text>
        <Text sx={{padding: "1vh 2vw"}} align="left" weight={600} color={theme.colors.neutral[7]} size={"2rem"}>{!price.includes("dle") ? price + " Kč" : price}</Text>
        <Card.Section mt={"2vh"}>
            <Button color="red" size="xl" sx={{width: "100%", fontSize: "1rem", borderRadius: "0 0 8px 8px"}}>{btnLabel}</Button>
        </Card.Section>
       </Card>
    )
}