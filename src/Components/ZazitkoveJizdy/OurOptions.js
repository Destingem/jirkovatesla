import { Text } from "@mantine/core";

export default function OurOptions({num, heading, children, device}) {

  if(device == "m"){
    return(
      <div style={{display: "flex", flexDirection: "column",}}>
      <div style={{display: "flex", gap: "5vw", alignItems: "center"}}>
        <div style={{display: "flex"}}>
           <div style={{width: "7vh", height: "7vh", backgroundColor: "rgba(255, 118, 118, 0.1)"}}></div>
           <Text weight={700} size={"4rem"} sx={{marginLeft: "-4.5vh"}}>{num}</Text>
         </div>
         <Text weight={500} size={"1.5rem"}>{heading}</Text>
        </div>
        <Text sx={{maxWidth: "100%"}}>
          {children}
      </Text>
      </div>
  )
  } else if(device == "t"){
    return(
      <div style={{display: "flex", flexDirection: "column", maxWidth: ""}}>
      <div style={{display: "flex", gap: "2vw", alignItems: "center"}}>
        <div style={{display: "flex"}}>
           <div style={{width: "7vh", height: "7vh", backgroundColor: "rgba(255, 118, 118, 0.1)"}}></div>
           <Text weight={700} size={"4rem"} sx={{marginLeft: "-4.5vh"}}>{num}</Text>
         </div>
         <Text weight={500} size={"2rem"}>{heading}</Text>
        </div>
        <Text sx={{maxWidth: "85%"}}>
          {children}
      </Text>
      </div>
  )
  } else{
    return(
      <div style={{display: "flex", flexDirection: "column", maxWidth: ""}}>
      <div style={{display: "flex", gap: "2vw", alignItems: "center"}}>
        <div style={{display: "flex"}}>
           <div style={{width: "7vh", height: "7vh", backgroundColor: "rgba(255, 118, 118, 0.1)"}}></div>
           <Text weight={700} size={"4rem"} sx={{marginLeft: "-4.5vh"}}>{num}</Text>
         </div>
         <Text weight={500} size={"2rem"}>{heading}</Text>
        </div>
        <Text sx={{maxWidth: "85%"}}>
          {children}
      </Text>
      </div>
  )
  }
}