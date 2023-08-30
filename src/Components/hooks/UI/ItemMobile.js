"use client"
import Link from "next/link"
import { Paper, Text, useMantineTheme } from "@mantine/core"
import { useState } from "react";
export default function ItemMobile(props) {
    const theme = useMantineTheme();
    let {items} = props;
    const [showedSublinks, setShowedSublinks] = useState(false);
    let textSize = "2.5rem";
    if (props.height > 540) {
        textSize = "2.5rem";
    } 
     else if (props.height > 590) {
      textSize = "2.5rem";
  } else if (props.height > 590) {
      textSize = "2.2rem";
  } else if (props.height > 460) {
      textSize = "1.9rem";
  } else if (props.height > 420) {
      textSize = "1.6rem";
  } else if (props.height > 300) {
      textSize = "1.3rem";
  } else{
    textSize = "1.1rem";
  }
  
    return(
        <Paper>
              <Link href={items ? "#" : props.href} style={{display: "flex", alignItems: "end", gap: "2vw"}}>
                <Text size={textSize} align="left" sx={{ fontWeight: 600 ,lineHeight: "125%",color: theme.colors.neutral[7], fontFamily: theme.other.chivo,}}>
                  {props.label}
                </Text>
                <div onClick={()=> {setShowedSublinks(prev => {return !prev})}}>
                {props.icon && 
<svg 
    style={{ transform: showedSublinks ? "rotate(45deg)" : "", transition: "transform 0.3s ease-in-out" }}
    xmlns="http://www.w3.org/2000/svg" 
    width="30" 
    height="30" 
    viewBox="0 0 30 30" 
    fill="none">
    <path d="M10 21.25H21.25L21.25 10H23.75L23.75 23.75H10V21.25ZM3.75 15H15L15 3.75H17.5V17.5H3.75V15Z" fill="#E42A45"/>
</svg>
}

                </div>
              </Link>
           
            <div style={{display: "flex", flexDirection: "column", gap: "2vh", marginTop: "2vh", transition: "all 1s ease-in-out"}}>
            {showedSublinks && items && items.map((item, index) => {
                return(
                 <Link href={item.href} key={index}> <Text sx={{lineHeight: "125%", fontSize: "1.5rem", fontWeight: "600", color: theme.colors.neutral[6]}}>{item.label}</Text></Link>
                )
              })}
            </div>
            </Paper>
    )
}