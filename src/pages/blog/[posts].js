import parseMarkdown from "@/Components/hooks/markdownHtml";
import useDevice from "@/Components/hooks/useDevice";
import { Carousel } from "@mantine/carousel";
import { Container, Grid, Text, useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";

export default function Post({myPost}){
    const { height, width } = useViewportSize();
    const device = useDevice(width);
    const theme = useMantineTheme();
    myPost = myPost?.attributes
    console.log(myPost)
    const { metadata, htmlContent } = parseMarkdown(myPost.Obsah);
    if(device !== "m"){
        return(
            <Container size={"70%"} sx={{padding: "20vh 0 5vh 0", display: "flex", flexDirection: "column", gap: "2vh"}}>
                <Text weight={500} size={"4rem"}>{myPost?.nazev}</Text>
                <div style={{display: "flex", gap: "1vw"}}>
                    <Text weight={600} >{myPost?.autor}</Text>
                    <Text>{new Date(myPost?.datum).toLocaleDateString()}</Text>
                </div>
                <Carousel height={"50vh"} loop>
                    {myPost.obrazky.data.map((obrazek, index) => {
                        return(
                            <Carousel.Slide key={index} >
                            <Image fill src={"https://cms.tesla.ondrejzaplatilek.cz" + obrazek.attributes.url} objectFit="cover" />
                            </Carousel.Slide>
                        )
                                
                    })}
                 
             
                </Carousel>
                <div style={{lineHeight: "200%", marginTop: "3vh"}} dangerouslySetInnerHTML={{ __html: htmlContent }} >
               
               </div>
               <Grid sx={{margin: "2vh 0"}}>
                {myPost?.soubory?.data?.map((soubor, index)=> {

                    return(
                        <Grid.Col span={2} sx={{aspectRatio: 1, }}>
                   <Link href={"https://cms.tesla.ondrejzaplatilek.cz" + soubor?.attributes?.url}>
                   <div style={{backgroundColor: theme.colors.cyan[0], aspectRatio: 1, width: "80%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10%", padding: "2vh 3vw"}}>
                     <Text color={theme.colors.cyan[7]} size={"2rem"} weight={700}>{soubor.attributes.ext}</Text>
                        <Text weight={700}>{soubor.attributes.name}</Text>
                     </div>
                   </Link>
                        </Grid.Col>
                    )
                })}
               </Grid>
            </Container>
        )
    }
    if(device == "m"){
        return(
            <Container size={"90%"} sx={{padding: "15vh 0 0vh 0", display: "flex", flexDirection: "column", gap: "2vh"}}>
                <Text weight={500} size={"4rem"}>{myPost?.nazev}</Text>
                <div style={{display: "flex", gap: "1vw"}}>
                    <Text weight={600} >{myPost?.autor}</Text>
                    <Text>{new Date(myPost?.datum).toLocaleDateString()}</Text>
                </div>
                <Carousel sx={{margin: "0 -5vw"}} height={"50vh"} loop>
                    {myPost.obrazky.data.map((obrazek, index) => {
                        return(
                            <Carousel.Slide key={index} >
                            <Image fill src={"https://cms.tesla.ondrejzaplatilek.cz" + obrazek.attributes.url} objectFit="cover" />
                            </Carousel.Slide>
                        )
                                
                    })}
                 
             
                </Carousel>
                <div style={{lineHeight: "200%", marginTop: "3vh"}} dangerouslySetInnerHTML={{ __html: htmlContent }} >
               
               </div>
               <Grid sx={{margin: "2vh 0"}}>
                {myPost?.soubory?.data?.map((soubor, index)=> {

                    return(
                        <Grid.Col span={6} sx={{aspectRatio: 1, }}>
                   <Link href={"https://cms.tesla.ondrejzaplatilek.cz" + soubor?.attributes?.url}>
                   <div style={{backgroundColor: theme.colors.cyan[0], aspectRatio: 1, width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10%", padding: "2vh 3vw"}}>
                     <Text color={theme.colors.cyan[7]} size={"2rem"} weight={700}>{soubor.attributes.ext}</Text>
                        <Text weight={700}>{soubor.attributes.name}</Text>
                     </div>
                   </Link>
                        </Grid.Col>
                    )
                })}
               </Grid>
            </Container>
        )
    }
    
}


export async function getStaticPaths() {
    const response = await fetch("https://cms.tesla.ondrejzaplatilek.cz/api/blogs?populate=deep", {
        headers: {
            Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
        }
    });
  
    const posts = await response.json();
    const paths = posts.data.map(post => "/blog/" + post.attributes.nazev.toLowerCase().replace(" ", "").normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
  
    return {
        paths,
        fallback: 'blocking' // or 'true' based on your needs
    };
  }
  export async function getStaticProps(blog) {
    
  
        var allPosts = await fetch("https://cms.tesla.ondrejzaplatilek.cz/api/blogs?populate=deep", {
          headers: {
              Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
          }
          })
          allPosts = await allPosts.json()
         let myPost = allPosts.data.filter((post) => post.attributes.nazev.toLowerCase().replace(" ", "").normalize('NFD').replace(/[\u0300-\u036f]/g, '') === blog.params.posts)
            myPost = myPost[0]
        return ({
        props: {
         
          myPost
        },
        revalidate: 60,
    })
  }