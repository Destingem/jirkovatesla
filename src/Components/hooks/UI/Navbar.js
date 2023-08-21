import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Text,
  createStyles,
  useMantineTheme,
  UnstyledButton,
  Button,
} from "@mantine/core";
import Link from "next/link";
import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import Image from "next/image";
import Logo from "../../../../public/images/JirkaLogo.png";
import NavBarMobile from "./NavbarMobile";
export default function Navbar({motion}) {
  const links = [
    { title: "Domů", href: "/o-me" },
    { title: "Služby", href: "/sluzby" },
    { title: "Portoflio", href: "/portfolio" },
    {title: "Blog", href: "/blog"},
    { title: "Kontakt", href: "/kontakt" },
  ];
  var theme = useMantineTheme();
  const [scroll, scrollTo] = useWindowScroll();
  const { height, width } = useViewportSize();
  let mobile = width < 768 ? true : false;
  const useStyles = createStyles((theme) => ({
    root: {
      flexGrow: 1,
      height: theme.spacing.xl,
      display: "flex",
      alignItems: "center",
      minHeight: "8vh",
      backgroundColor: "transparent",
      justifyContent: "center",
      zIndex: 1850,
      transition: "all 0.3s ease-in-out",
      
    },
    wrapper: {
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 1850,
    },
    logoContainer: {
      display: "flex",
      alignItems: "flex-end",
      gap: theme.spacing.xs,
      backgroundColor: scroll.y > 1 ? theme.colors.cyan[1]: "transparent",
      borderRadius: "3px",
      padding: theme.spacing.md,
      width: "fit-content",
     
      
    },
    logo: {
      marginRight: theme.spacing.md,
      fontSize: theme.spacing.xl * 1.5,
      color: "#545454",
    },
    linksContainer: {
      display: "flex",
      gap: theme.spacing.xl,
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor: scroll.y > 1 ? theme.colors.cyan[1]: "transparent",
      borderRadius: "3px",
      padding: theme.spacing.md,
      width: "fit-content",
    },
    link: {
      position: "relative",
      marginLeft: theme.spacing.md,
      color: theme.colors.dark[8],
      whiteSpace: "nowrap",
      fontSize: theme.spacing.xl * 0.8,
      fontWeight: 500,
      ":hover": {
        color: theme.colors.dark[4],
      },
      ":hover $linkHover": {
        opacity: 1,
      },
    },
    linkHover: {
      position: "absolute",
      bottom: -4,
      left: 0,
      height: 2,
      backgroundColor: theme.colors.dark[4],
      opacity: 0,
      width: "100%",
      transition: "opacity 0.3s ease-in-out",
    },
  }));

  const { classes } = useStyles();
 if(mobile) return (
  <NavBarMobile />)
  return (
    <div className={classes.wrapper}>
      <Paper
        className={classes.root}
        shadow="none"
        sx={
          !scroll.y < 1
            ? {
                backgroundColor: "transparent",
                borderBottom: "3px  #545454",
              }
            : { borderBottom: "" }
        }
      >
        <div style={{ width: "80%", zIndex: "1850" }}>
          <Grid gutter="lg" w={"100%"}>
            <Grid.Col span={6}>
              <Link href={"/"} className={classes.logoContainer}>
                <Image src={Logo} width={50} height={50} style={{}} />
                <div>
                <Text size="xl" weight={600}>
                  ndřej
                </Text>
                <Text size="xl" weight={600}>
                  aplatílek
                </Text>
                </div>
              </Link>
            </Grid.Col>
            <Grid.Col
              span={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <div className={classes.linksContainer}>
                {links.map((link, index) => (
                  <Link href={link.href} key={index}>
                    <Text className={classes.link}>
                      {link.title}
                      <div className={classes.linkHover} />
                    </Text>
                  </Link>
                ))}
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </Paper>
    </div>
  );
}
