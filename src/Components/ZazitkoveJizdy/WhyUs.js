import { BsFillLightningChargeFill } from "react-icons/bs";
import SubTitle from "../hooks/UI/SubTitle";
import { Paper, Text, Title } from "@mantine/core";
function FeaturesCard({icon, title, children, device}){
    if(device == "l" || device == "t"){
      return(
        <Paper sx={{transition: "all 0.3s ease-in-out",backgroundColor: "rgb(241 241 241)", minHeight: "20vh", borderRadius: "12px", padding: "6vh 4vw", display: "flex", flexDirection: "column", gap: "2vh", ":hover": {backgroundColor: "rgba(255, 118, 118, 0.1)"}}}>
    <div style={{backgroundColor: "#e21837", borderRadius: "60px",  display: "flex", maxWidth: "fit-content", padding: "1rem", color: "rgb(227 227 227)"}}>{icon}</div>
    <Title order={4} size={"2rem"}>
      {title}
    </Title>
    <Text>
    {children}
    </Text>
      </Paper>
      )
    } else{
      return(
        <Paper sx={{transition: "all 0.3s ease-in-out",backgroundColor: "rgb(241 241 241)", minHeight: "15vh", borderRadius: "12px", padding: "4vh 6vw", display: "flex", flexDirection: "column", gap: "4vh", ":hover": {backgroundColor: "rgba(255, 118, 118, 0.1)"}}}>
    <div style={{display: "flex", gap: "2vh"}}>
    <div style={{backgroundColor: "#e21837", borderRadius: "60px",  display: "flex", maxWidth: "fit-content", padding: "1rem", color: "rgb(227 227 227)"}}>{icon}</div>
    <Title order={4} size={"2rem"}>
      {title}
    </Title>
    </div>
    <Text>
    {children}
    </Text>
      </Paper>
      )
    }
  }
export default function WhyUs({device, whyUs}){
   if(device == "l"  || device == "t"){
    return(
      <div style={{display: "flex", flexDirection: "column", gap: "3vh"}}>
      <SubTitle href={"#"} device={device} label={"NAŠE VÝHODY"}>
        Proč jet s námi?
      </SubTitle>
      <div style={{display: "flex", minHeight: "50vh", gap: "2vh"}}>
<div style={{maxWidth: "50%", height: "100%",  width :"100%",  display: "flex", flexDirection: "column", gap: "2vh"}}>
{whyUs.items1[0].map((item, index)=> {
  return(
    <FeaturesCard device={device} icon={item.icon} title={item.title}>{item.text}</FeaturesCard>
  )
})}
  
</div>
<div style={{maxWidth: "50%", height: "100%",  width :"100%",  display: "flex", flexDirection: "column", gap: "2vh", marginTop: "6vh"}}>
{whyUs.items1[1].map((item, index)=> {
  return(
    <FeaturesCard device={device} icon={item.icon} title={item.title}>{item.text}</FeaturesCard>
  )
})}
</div>
      </div>
    </div>
  )
   } else {
    return(
      <div style={{display: "flex", flexDirection: "column", gap: "3vh", padding: "2vh 10vw"}}>
      <SubTitle href={"#"} device={device} label={"NAŠE VÝHODY"}>
        Proč jet s námi?
      </SubTitle>
  

      {whyUs.items.map((item, index)=> {
  return(
    <FeaturesCard device={device} icon={item.icon} title={item.title}>{item.text}</FeaturesCard>
  )
})}



     
    </div>
  )
   }
}