import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  Burger,
  Divider,
  Drawer,
  Grid,
  MediaQuery,
  Menu,
  Paper,
  Text,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import ItemMobile from "./ItemMobile";
import Logo from "../../../../public/images/JirkaLogo.png";
import { useRouter } from "next/router";

const itemsSluzby = [
  { href: "/sluzby", label: "Všechny služby" },
  { href: "/zazitkove-jizdy", label: "Zážitkové jízdy" },
  { href: "/pronajem", label: "Pronájem" },
  { href: "/taxi", label: "Taxi a rozvoz" },
  { href: "/akce", label: "Akce" },

];

const menuItems = [
  { href: "/", label: "Domů" },
  { href: "/o-nas", label: "O nás" },
  { href: "/sluzby", label: "Služby", icon: true, items: itemsSluzby },
  { href: "/rezervace", label: "Rezervace" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakty" },
];

export default function NavBarMobile(props) {


  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  var [scroll, scrollTo] = useWindowScroll();
  const theme = useMantineTheme();
  const router = useRouter();
  useEffect(() => {
    setOpened(false);
  }, [router.pathname]);
  return (
    <div
      className={styles.main_mobile}
      style={{
        backgroundColor: scroll.y > 0 && "rgb(34, 184, 207, 0.5)",
        position: "fixed",
        zIndex: "12000",
        transition: !opened ? (scroll.y > 0 ? "2s" : "0.5s") : 0,
        backdropFilter: scroll.y > 0 && !opened && "blur(4px)",
      }}
    >
      {!opened && (
        <Link href={"/"} className={styles.header_mobile}>
        <Image src={Logo} width={40} height={40} style={{}} />
              <div>
                <Text size={"1.5rem"} weight={500}>
                  Jirkova Tesla
                </Text>
              </div>
        </Link>
      )}
      {!opened && (
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          title={title}
        />
      )}
      {opened && (
        <Drawer
        closeButtonProps={{ style: { color: theme.colors.primary[9],  }, size: "xl" }}
          zIndex={12001}
          onAbort={() => setOpened((o) => !o)}
          opened={opened}
          onClose={() => setOpened((o) => !o)}
          title={
            <Link href={"/"} className={styles.header_mobile}>
              <Image src={Logo} width={40} height={40} style={{}} />
              <div>
                <Text size={"1.5rem"} weight={500}>
                  Jirkova Tesla
                </Text>
              </div>
            </Link>
          }
          padding="xl"
          size="100vw"
          transition="fade"
          position="right"
          color="blue"
          
          sx={{ backgroundColor: theme.colors.cyan[7] + "!important",  maxWidth: "100vw",
    overflow: "hidden", }}
        >
          <div className={styles.openedMenu_mobile}>
            {menuItems.map((item) => {
              return <ItemMobile {...item} />;
            })}
          </div>
        </Drawer>
      )}
    </div>
  );
}
