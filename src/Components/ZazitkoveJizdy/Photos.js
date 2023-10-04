import { Grid, Skeleton, Container, Image, Text } from '@mantine/core';
import SubTitle from '../hooks/UI/SubTitle';
import useDevice from '../hooks/useDevice';


const child = <Skeleton height={"30vh"} radius="md" animate={true} />;

export function PhotosGallery({device, images}) {
 
  const photos = images?.map((image, index)=> {
    var span = 4;
    
  if(device == "l"){
    switch(index % 7){
      case 0: span = 4; break;
      case 1: span = 8; break;
      case 2: span = 8; break;
      case 3: span = 4; break;
      case 4: span = 3; break;
      case 5: span = 3; break;
      case 6: span = 6; break;
      case 7: span = 6; break;

    }
  } else{
    switch(index % 5){
      case 0: span = 5; break;
      case 1: span = 7; break;
      case 2: span = 7; break;
      case 3: span = 5; break;
      case 4: span = 12; break;
    

    }
  }
    return {...image, span: span, index}
  })
  return (
 <div>
     <div style={{ display: "flex", flexDirection: "column", gap: "3vh", }}>
    <SubTitle href={"#"} device={device} label={"GALERIE"} style={{ padding: device == "m" ? "0 10vw" : "0"}}>
      Fotky
    </SubTitle>
      <Grid sx={{minHeight: "50vh"}}>
        {photos?.map((image, index) => {
          return(
          <Grid.Col key={index} span={image.span}>
            <Image height={"30vh"} radius="md" animate={true} src={image.src}/>
          </Grid.Col>
        )
        })}

      </Grid>
     
      
    </div>
 </div>
 
  );
}