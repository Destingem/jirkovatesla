import { Grid, Skeleton, Container, Image, Text } from '@mantine/core';
import SubTitle from '../hooks/UI/SubTitle';
import useDevice from '../hooks/useDevice';
import { useState } from 'react';
import { useDisclosure, useHotkeys } from '@mantine/hooks';
import SubModal from './SubModal';


const child = <Skeleton height={"30vh"} radius="md" animate={true} />;

export function PhotosGallery({device, images}) {
  useHotkeys([
   // arrow right
    ['ArrowRight', () => { setActivePhoto((activePhoto + 1) % photos.length) }],
    // arrow left
    ['ArrowLeft', () => { setActivePhoto((activePhoto - 1 + photos.length) % photos.length) }],
  ]);
  const [activePhoto, setActivePhoto] = useState(0);
  const [opened, { open, close }] = useDisclosure(false);
 console.log(images)
 function handleClick(index){
    setActivePhoto(index)
    open()
 }
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
<>

<div style={{zIndex: "2"}}>

     <div style={{ display: "flex", flexDirection: "column", gap: "3vh", }}>
    <SubTitle href={"#"} device={device} label={"GALERIE"} style={{ padding: device == "m" ? "0 10vw" : "0"}}>
      Fotky
    </SubTitle>
      <Grid sx={{minHeight: "50vh"}}>
        {photos?.map((image, index) => {
          return(
          <Grid.Col onClick={()=> {handleClick(index)}} key={index} span={image.span}>
          <Image height={"30vh"} radius="md" animate={true} src={"https://cms.tesla.ondrejzaplatilek.cz" + image.attributes.url}/>
          </Grid.Col>
        )
        })}

      </Grid>
     
      
    </div>
 </div>
 <div>
 <SubModal opened={opened} close={close} activePhoto={activePhoto} setActivePhoto={setActivePhoto} photos={photos}/>
 </div>
</>
 
  );
}