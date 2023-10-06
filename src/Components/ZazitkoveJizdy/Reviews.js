import { ActionIcon, Avatar, Blockquote, Button, Card, Grid, Text, Title, useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import useDevice from "../hooks/useDevice";
import { SiTesla } from "react-icons/si";
import Link from "next/link";
import SubTitle from "../hooks/UI/SubTitle";
import { useReducer } from "react";
export default function OurReviews({articles}){
    const theme = useMantineTheme()
    const { height, width } = useViewportSize();
    const device = useDevice(width);
   
    const articleReducer = (state, action) => {
      console.log(state);
    if(state.articles.length <= 3){
      return state
    }
    switch (action.type) {
        case "NEXT":
          // Get the next article after the currently last visible one
          const nextIndex = (state.current[2].index + 1) % articles.length;
          const nextArticle = { ...articles[nextIndex], index: nextIndex };
    
          // Get a new array of current articles without the first one and adding the next one
          return { ...state, current: [...state.current.slice(1), nextArticle] };
    
        case "PREV":
          // Get the previous article before the currently first visible one
          const prevIndex = (state.current[0].index - 1 + articles.length) % articles.length;
          const prevArticle = { ...articles[prevIndex], index: prevIndex };
    
          // Get a new array of current articles without the last one and adding the previous one to the start
          return { ...state, current: [prevArticle, ...state.current.slice(0, 2)] };
    
        default:
          return state;
      }
    };
    
    // Add an 'index' field to each article for ease of navigation
    const indexedArticles = articles.map((article, index) => ({ ...article, index }));
    
    const [currentArticles, dispatch] = useReducer(articleReducer, {
      articles: indexedArticles,
      current: indexedArticles.slice(0, 3)
    });
   if(device !== "l"){
    return (
      <section style={{ padding: "5vh 10vw", display: "flex", flexDirection: "column", gap: "4vh" }}>
          <SubTitle href={"/o-nas"} device={device} label={"HODNOCENÍ"}>Naši zákazníci</SubTitle>
          
          <div style={{ position: 'relative', overflow: 'hidden', maxHeight: '100vh' }}>
              {/* Gradient overlays for the fading effect */}
              <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '30%',
                  background: 'linear-gradient(to bottom, white, transparent)',
                  zIndex: 2,
              }}></div>
              <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '30%',
                  background: 'linear-gradient(to top, white, transparent)',
                  zIndex: 2,
              }}></div>
  
              <div style={{ display: "flex", flexDirection: "column", gap: "2vh", alignItems: 'center', zIndex: 1 }}>
                  {currentArticles.current.map((article, index) => {
                      const opacity = index === 1 ? 1 : 0.5;
                      return (
                          <Card
                              key={article.index}
                              style={{
                                 
                                  backgroundColor: "rgb(255, 118, 118, 0.1)",
                                  borderRadius: "25px",
                                  width: "100%",
                                  opacity: opacity,
                                  transition: 'opacity 0.5s',
                                  height: index === 1 ? 'auto' : '15vh', // half height for top and bottom cards
                                  overflow: 'hidden'
                              }}
                          >
                              <Title order={3} size={"2rem"} style={{ marginBottom: "2vh", color: theme.colors.neutral[7] }}>
                                  {article.heading}
                              </Title>
                              <Text sx={{ fontFamily: theme.other.fira_code, }}>
                                  {article.label}
                              </Text>
                              <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
                                  <Avatar size={"lg"} radius={""} color="red"><SiTesla /></Avatar>
                                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                                      <Text weight={700}>{article.author_name}</Text>
                                      <Text weight={400}>{article.author_role}</Text>
                                  </div>
                              </div>
                              <Card.Section sx={{ backgroundColor: "#e21837", marginTop: "2vh"}}>
                              <Link href={"/o-nas"} >
                                  <Text
                                      size="lg"
                                      rightIcon="->"
                                      variant="filled"
                                      color="#fff"
                                      align="center"
                                      sx={{
                                         
                                          fontWeight: "700",
                                          fontSize: "1.1rem",
                                      
                                         padding: "2vh 5vw",
                                        
                                      }}
                                  >
                                      {article.btnLabel}
                                  </Text>
                              </Link>
                              </Card.Section>
                          </Card>
                      );
                  })}
                  
              </div>
              
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2vw", marginTop: "-20vh", zIndex: "3" }}>
                    <ActionIcon size={"xl"} color="red" variant="filled" radius={"50%"} onClick={() => { dispatch({ type: "PREV" }); }}>{"<-"}</ActionIcon>
                    <ActionIcon size={"xl"} color="red" variant="filled" radius={"50%"} onClick={() => { dispatch({ type: "NEXT" }); }}>{"->"}</ActionIcon>
                </div>
      </section>
  );
   } else {
    return(
        <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
            <SubTitle href={"#"} device={device} label={"RECENZE"}>Hodnocení zákazníky</SubTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: "2vh", alignItems: 'center', margin: "2vw -20vw" }}>
                <div style={{ display: "flex", gap: "3vw", justifyContent: 'center' }}>
                    {currentArticles.current.map((article, index) => {
                        const isCenter = index === 1;
                        return (
                            <div
                                key={article.index}
                                style={{
                                    padding: "3vh 2vw 1.5vh 2vw",
                                    backgroundColor: "rgb(255, 118, 118, 0.1)",
                                    borderRadius: "25px",
                                    flex: 1,
                                    opacity: isCenter ? 1 : 0.5,
                                    transition: 'opacity 0.3s',
                                }}
                            >
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    flexDirection: "column",
                                    height: "100%",
                                }}>
                                    <div>
                                        <Title order={3} size={"2rem"} style={{ marginBottom: "2vh", color: theme.colors.neutral[7] }}>
                                            {article.heading}
                                        </Title>
                                        <Text sx={{ fontFamily: theme.other.fira_code, }}>
                                            {article.label}
                                        </Text>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "2.5vh" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
                                            <Avatar size={"lg"} radius={""} color="red"><SiTesla /></Avatar>
                                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                                                <Text weight={700}>{article.author_name}</Text>
                                                <Text weight={400}>{article.author_role}</Text>
                                            </div>
                                        </div>
                                        <Link href={"/o-nas"} style={{ marginTop: "auto" }}>
                                            <Button
                                                size="lg"
                                                rightIcon="->"
                                                variant="filled"
                                                color="red"
                                                sx={{
                                                    backgroundColor: "#e21837",
                                                    fontWeight: "700",
                                                    fontSize: "1.1rem",
                                                    marginTop: "auto",
                                                    marginBottom: "1vh",
                                                    borderRadius: "25px"
                                                }}
                                            >
                                                {article.btnLabel}
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2vw", marginTop: "4vh" }}>
                    <ActionIcon size={"xl"} color="red" variant="filled" radius={"50%"} onClick={() => { dispatch({ type: "PREV" }); }}>{"<-"}</ActionIcon>
                    <ActionIcon size={"xl"} color="red" variant="filled" radius={"50%"} onClick={() => { dispatch({ type: "NEXT" }); }}>{"->"}</ActionIcon>
                </div>
            </div>
        </div>
    );
}
}