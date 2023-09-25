import { Anchor, Box, Button, Center, Divider, Group, HoverCard, SimpleGrid, Space, Text, ThemeIcon, UnstyledButton, useMantineTheme } from "@mantine/core";
import { IconBook, IconChartPie3, IconChevronDown, IconCode, IconCoin, IconFingerprint, IconNotification } from "@tabler/icons-react";

import classes from './HeaderMegaMenu.module.css';
import hexToRGBA from "../hexToRGBA";
import Link from "next/link";
import { useRouter } from "next/router";



export default function LaptopBigMenu({itemsSluzby, classN, textColor, scroll}){
const router = useRouter()
const theme = useMantineTheme()
    const links = itemsSluzby.map((item) => (

          <UnstyledButton onClick={()=> {router.push(item.href)}} color={item.color} key={item.title} sx={{borderRadius: "12px",padding: "2vh 1vw", ":hover" : {
            backgroundColor: hexToRGBA(item.color, 0.1),
        }}}>
          <div style={{display: "flex", alignItems: "center", gap: "1vw"}}>
            <ThemeIcon size={40} variant="default" radius="md">
            {item.icon}
            </ThemeIcon>
            <div style={{display: "flex", flexDirection: "column"}}>
              <Text size="sm" fw={500}>
                {item.label}
              </Text>
              <Text size="xs" c="dimmed">
                {item.description}
              </Text>
            </div>
          </div>
        </UnstyledButton>
  
      ));
    return(
        <HoverCard width={600} position="bottom" radius="md" shadow="">
              <HoverCard.Target>
                
                  <Link href={"/sluzby"} style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
                    <Text className={classN.link} color={scroll.y > 1 ? "#000" : textColor}>
                    Služby
                      <div className={classN.linkHover} />
                    </Text>
                    <IconChevronDown
                      style={{ width: "2rem", height: "2rem" }}
                      color={theme.colors.blue[6]}
                    />
                  </Link>
                  
                
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}} justify="space-between" px="md" >
                  <Text weight={700} size={"1.5rem"} >Služby</Text>
                  <Link href="/sluzby" fz="xs" style={{fontSize: "0.8rem"}}>
                   Zobrazit vše
                  </Link>
                </div>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>
                <Space h={"2vh"} />
                <div className={classes.dropdownFooter} style={{padding: "2vh 2vw", backgroundColor: "rgb(186, 246, 239, 0.5)", borderRadius: "12px"}}>
                  <Group sx={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                      <Text fw={500} fz="sm">
                        Všechny služby
                      </Text>
                      <Text size="xs" c="dimmed">
                        Podívejte se na všechny možnosti pronájmu a taxi služeb
                      </Text>
                    </div>
                    <Button onClick={()=> {router.push("/sluzby")}} color="cyan">Prohlédnout</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
  )
}