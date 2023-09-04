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
  Menu,
  ActionIcon,
  Indicator,
} from "@mantine/core";
import Link from "next/link";
import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import Image from "next/image";
import Logo from "../../../../public/images/JirkaLogo.png";
import NavBarMobile from "./NavbarMobile";
import { BsFillCartFill } from "react-icons/bs";
import { useRouter } from "next/router";
export default function Navbar({motion}) {
  var theme = useMantineTheme();
  const itemsSluzby = [
    {href: "/sluzby", label: "Všechny služby"},
    { href: "/sluzby/zazitkove-jizdy", label: "Zážitkové jízdy", color: "red" ,icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50" fill="none"><path d="M22.9167 33.3333H27.0834V41.6667H22.9167M22.9167 20.8333H27.0834V29.1667H22.9167M22.9167 8.33332H27.0834V16.6667H22.9167M8.33337 45.8333H41.6667V4.16666H8.33337V45.8333Z" fill="#E67787"></path></svg>},
    { href: "/sluzby/pronajem", label: "Pronájem", color: "teal", icon:  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 41 41" fill="none"><path d="M15.375 0C12.4708 0 10.25 2.22083 10.25 5.125C10.25 8.02917 12.4708 10.25 15.375 10.25C17.5958 10.25 19.475 8.88333 20.1583 6.83333H23.9167V10.25H27.3333V6.83333H30.75V3.41667H20.1583C19.475 1.36667 17.5958 0 15.375 0ZM15.375 3.41667C16.4 3.41667 17.0833 4.1 17.0833 5.125C17.0833 6.15 16.4 6.83333 15.375 6.83333C14.35 6.83333 13.6667 6.15 13.6667 5.125C13.6667 4.1 14.35 3.41667 15.375 3.41667ZM11.1042 13.6667C9.90833 13.6667 9.05417 14.35 8.7125 15.375L5.125 25.625V39.2917C5.125 40.3167 5.80833 41 6.83333 41H8.54167C9.56667 41 10.25 40.3167 10.25 39.2917V37.5833H30.75V39.2917C30.75 40.3167 31.4333 41 32.4583 41H34.1667C35.1917 41 35.875 40.3167 35.875 39.2917V25.625L32.2875 15.375C31.9458 14.35 30.9208 13.6667 29.8958 13.6667H11.1042ZM11.1042 16.2292H29.8958L32.4583 23.9167H8.54167L11.1042 16.2292ZM11.1042 27.3333C12.4708 27.3333 13.6667 28.5292 13.6667 29.8958C13.6667 31.2625 12.4708 32.4583 11.1042 32.4583C9.7375 32.4583 8.54167 31.2625 8.54167 29.8958C8.54167 28.5292 9.7375 27.3333 11.1042 27.3333ZM29.8958 27.3333C31.2625 27.3333 32.4583 28.5292 32.4583 29.8958C32.4583 31.2625 31.2625 32.4583 29.8958 32.4583C28.5292 32.4583 27.3333 31.2625 27.3333 29.8958C27.3333 28.5292 28.5292 27.3333 29.8958 27.3333Z" fill="#41E4CC"></path></svg>},
    { href: "/sluzby/taxi", label: "Taxi a rozvoz", color: "yellow" , icon: <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 43 43" fill="none"><path d="M8.95833 19.7083L11.6458 11.6458H31.3542L34.0417 19.7083M31.3542 28.6667C30.6414 28.6667 29.9578 28.3835 29.4538 27.8795C28.9498 27.3755 28.6667 26.6919 28.6667 25.9792C28.6667 25.2664 28.9498 24.5828 29.4538 24.0788C29.9578 23.5748 30.6414 23.2917 31.3542 23.2917C32.0669 23.2917 32.7505 23.5748 33.2545 24.0788C33.7585 24.5828 34.0417 25.2664 34.0417 25.9792C34.0417 26.6919 33.7585 27.3755 33.2545 27.8795C32.7505 28.3835 32.0669 28.6667 31.3542 28.6667ZM11.6458 28.6667C10.9331 28.6667 10.2495 28.3835 9.74548 27.8795C9.24148 27.3755 8.95833 26.6919 8.95833 25.9792C8.95833 25.2664 9.24148 24.5828 9.74548 24.0788C10.2495 23.5748 10.9331 23.2917 11.6458 23.2917C12.3586 23.2917 13.0422 23.5748 13.5462 24.0788C14.0502 24.5828 14.3333 25.2664 14.3333 25.9792C14.3333 26.6919 14.0502 27.3755 13.5462 27.8795C13.0422 28.3835 12.3586 28.6667 11.6458 28.6667ZM33.8983 10.75C33.54 9.71083 32.5367 8.95833 31.3542 8.95833H26.875V5.375H16.125V8.95833H11.6458C10.4633 8.95833 9.46 9.71083 9.10167 10.75L5.375 21.5V35.8333C5.375 36.3085 5.56376 36.7642 5.89977 37.1002C6.23577 37.4362 6.69149 37.625 7.16667 37.625H8.95833C9.43351 37.625 9.88923 37.4362 10.2252 37.1002C10.5612 36.7642 10.75 36.3085 10.75 35.8333V34.0417H32.25V35.8333C32.25 36.3085 32.4388 36.7642 32.7748 37.1002C33.1108 37.4362 33.5665 37.625 34.0417 37.625H35.8333C36.3085 37.625 36.7642 37.4362 37.1002 37.1002C37.4362 36.7642 37.625 36.3085 37.625 35.8333V21.5L33.8983 10.75Z" fill="#E6DD8D"></path></svg>},
    { href: "/sluzby/akce", label: "Akce", color: "purple", icon: <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 43 43" fill="none"><path d="M25.9792 32.25C24.725 32.25 23.6649 31.817 22.799 30.951C21.933 30.085 21.5 29.025 21.5 27.7708C21.5 26.5166 21.933 25.4566 22.799 24.5906C23.6649 23.7246 24.725 23.2916 25.9792 23.2916C27.2333 23.2916 28.2934 23.7246 29.1594 24.5906C30.0254 25.4566 30.4583 26.5166 30.4583 27.7708C30.4583 29.025 30.0254 30.085 29.1594 30.951C28.2934 31.817 27.2333 32.25 25.9792 32.25ZM8.95834 39.4166C7.97292 39.4166 7.12904 39.0655 6.42671 38.3631C5.72438 37.6608 5.37381 36.8175 5.375 35.8333V10.75C5.375 9.76456 5.72617 8.92069 6.4285 8.21835C7.13084 7.51602 7.97411 7.16545 8.95834 7.16665H10.75V3.58331H14.3333V7.16665H28.6667V3.58331H32.25V7.16665H34.0417C35.0271 7.16665 35.871 7.51781 36.5733 8.22015C37.2756 8.92248 37.6262 9.76576 37.625 10.75V35.8333C37.625 36.8187 37.2738 37.6626 36.5715 38.3649C35.8692 39.0673 35.0259 39.4178 34.0417 39.4166H8.95834ZM8.95834 35.8333H34.0417V17.9166H8.95834V35.8333Z" fill="#8171E4"></path></svg> },
  ];
  const menuItems = [
    { href: "/", label: "Domů" },
    { href: "/o-nas", label: "O nás" },
    { href: "/sluzby", label: "Služby", icon: true, items: itemsSluzby },
    { href: "/rezervace", label: "Rezervace" },
    { href: "/blog", label: "Blog" },
    { href: "/kontakt", label: "Kontakty" },
  ];
 
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
      marginTop: scroll.y > 1 ? 'clamp(10px, 2vh, 0px)' : 'clamp(35px, 2vh, 0px)',
      
    },
    wrapper: {
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 1850,
      padding: "0vh 0",
      transition: "all 0.3s ease-in-out",
    
    
      
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing.xs,
   
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
   
      borderRadius: "3px",
      padding: theme.spacing.md,
      width: "fit-content",
    },
    link: {
      position: "relative",
      marginLeft: theme.spacing.md,
    
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
  const router = useRouter();
  console.log(router);
  let textColor = "#ffffff"
  let backgroundColor = theme.colors.cyan[1]
  let cardColor = "light"
  switch (router.pathname) {
    case "/":
      textColor = "#ffffff"
      break;
    case "/o-nas":
      textColor = "#000"
      break;
    case "/sluzby":
      textColor = "#000"
      break;
    case "/rezervace":
      textColor = "#000"
      break;
    case "/blog":
      textColor = "#000"
      break;
    case "/kontakt":
      textColor = "#000"
      break;
    case "/sluzby/zazitkove-jizdy":
      textColor = theme.colors.primary[8]
      backgroundColor = "#f3c7c6"
      break;
    case "/sluzby/pronajem":
      textColor = theme.colors.teal[9]
      backgroundColor = "#c7f3c7"
      break;
    case "/sluzby/taxi":
      textColor = theme.colors.yellow[9]
      backgroundColor = "#f2eec6"
      break;
    case "/sluzby/akce":
      textColor = theme.colors.grape[9]
      backgroundColor = "#dec7f2"
      break;
    default:
      textColor = "#000"
      break;
  }
  return (
    <div className={classes.wrapper} style={{  backgroundColor: scroll.y > 1 ? backgroundColor : "transparent",}}>
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
        <div style={{ width: "95%", zIndex: "1850", paddingLeft: "10%", paddingBottom: "1vh" }}>
          <Grid gutter="lg" w={"100%"}>
            <Grid.Col span={5}>
              <Link href={"/"} className={classes.logoContainer}>
                <Image src={Logo} width={50} height={50} style={{}} />
                <div>
                <Text color={scroll.y > 1 ? "#000" : textColor } size="xl" weight={600}>
                  Jirkova tesla
                </Text>
             
                </div>
              </Link>
            </Grid.Col>
            <Grid.Col
              span={5}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <div className={classes.linksContainer}>
                {menuItems.map((link, index) => {
                  
                  if(!link.items){
                    
                    return(
                  <Link href={link.href} key={index}>
                    <Text className={classes.link} color={scroll.y > 1 ? "#000" : textColor }>
                      {link.label}
                      <div className={classes.linkHover} />
                    </Text>
                  </Link>
                )
                  } else{
                    const [opened, setOpened] = useState(false);
                    return(
                  <Menu position="bottom-start" offset={20} key={index} opened={opened} onChange={setOpened}>
                  <Menu.Target >
                  <Text onMouseEnter={()=> {setOpened(true)}} className={classes.link} color={scroll.y > 1 ? "#000" : textColor }>
                      {link.label}
                      <div className={classes.linkHover} />
                    </Text>
                    </Menu.Target>
                    <Menu.Dropdown onMouseLeave={()=> {setTimeout(()=> {setOpened(false)}, 500)}}>
                      {link.items.map((link, index)=> {
                        return(
                          <Link href={link.href}><Menu.Item color={link.color} icon={link.icon}>{link.label}</Menu.Item></Link>
                        )
                      })}
                    </Menu.Dropdown>
                
                  </Menu>
                )
                  }
                })}
              </div>
            </Grid.Col>
            <Grid.Col span={2} sx={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
            <Link href={"/rezervace"} style={{ textAlign: "center" }} >
          {" "}
          <Button
            rightIcon={"->"}
            size="xl"
            
            sx={{ fontSize: "1rem", minWidth: "25vh", width: "100%"}}
            radius={60}
            color={"dark"}
          >
            Rezervovat jízdu
          </Button>
        </Link>
            </Grid.Col>
          </Grid>
        </div>
      </Paper>
    </div>
  );
}
