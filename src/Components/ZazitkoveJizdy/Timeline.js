import { Grid, Text } from "@mantine/core";
import SubTitle from "../hooks/UI/SubTitle";


export default function TimeLine({device, timeLine}){
  function TimeCard({ label, icon, children, }) {
  if(device == "m"){
    return (
      <Grid.Col
        span={12}
        style={{ display: "flex", flexDirection: "column", marginBottom: "5vh" }}
      >
      <div style={{display: "flex", alignItems: "flex-start", gap: "4vw"}}>
      <div
          style={{
            width: "2vh",
            height: "2vh",
            backgroundColor: "#000",
            marginLeft: "-2.5vw"
          
          }}
        ></div>
        <Text sx={{  }} size={"xl"} weight={700}>
          {label}
        </Text>
      </div>
    
       
        <Text size={"md"} sx={{ marginTop: "2vh", padding: "0 2vw 0 8vw" }}>
          {children}
        </Text>
      
      </Grid.Col>
    );
  } else if(device == "t"){
    return (
      <Grid.Col
        span={6}
        style={{ display: "flex", flexDirection: "column", padding: "0 5vw 0 0" }}
      >
        <div
          style={{
            width: "2vh",
            height: "2vh",
            backgroundColor: "#000",
            marginTop: "-1vh",
          }}
        ></div>
        <Text sx={{ marginTop: "2vh" }} size={"xl"} weight={700}>
          {label}
        </Text>
        <Text size={"md"} sx={{ marginTop: "2vh" }}>
          {children}
        </Text>
      </Grid.Col>
    );
        } else{
          return (
            <Grid.Col
              span={3}
              style={{ display: "flex", flexDirection: "column", padding: "0 5vw 0 0" }}
            >
              <div
                style={{
                  width: "2vh",
                  height: "2vh",
                  backgroundColor: "#000",
                  marginTop: "-1vh",
                }}
              ></div>
              <Text sx={{ marginTop: "2vh" }} size={"xl"} weight={700}>
                {label}
              </Text>
              <Text size={"md"} sx={{ marginTop: "2vh" }}>
                {children}
              </Text>
            </Grid.Col>
          );
              }

  }
   if(device == "m"){
    return(
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8vh",
        marginBottom: "5vh",
        padding: "2vh 8vw",
      }}
    >
     
      <SubTitle href={"#"} device={device} label={"TIMELINE"}>
        {timeLine.name}
      </SubTitle>
      <Grid sx={{ borderLeft: "3px solid #000" }} gutter={0}>
     {timeLine.items.map((item, index)=> {
        return(
          <TimeCard label={item.label}>{item.text}</TimeCard>
        )
     })}
      </Grid>
    </div>
  )
   } else if( device == "t"){
    return(
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8vh",
        marginBottom: "5vh",
      }}
    >
      {" "}
      <SubTitle href={"#"} device={device} label={"TIMELINE"}>
      {timeLine.name}
      </SubTitle>
      <Grid sx={{ borderTop: "3px solid #000" }} gutter={0}>
      {timeLine.items.map((item, index)=> {
        return(
          <TimeCard label={item.label}>{item.text}</TimeCard>
        )
     })}
      </Grid>
    </div>
  )
   } else{
    return(
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8vh",
        marginBottom: "5vh",
      }}
    >
      {" "}
      <SubTitle href={"#"} device={device} label={"TIMELINE"}>
      {timeLine.name}
      </SubTitle>
      <Grid sx={{ borderTop: "3px solid #000" }} gutter={0}>
      {timeLine.items.map((item, index)=> {
        return(
          <TimeCard label={item.label}>{item.text}</TimeCard>
        )
     })}
      </Grid>
    </div>
  )
   }
}