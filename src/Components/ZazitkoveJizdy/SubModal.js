import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import Image from 'next/image';

export default function SubModal({opened, close, open, activePhoto, photos}) {
  console.log(photos);
  console.log(activePhoto)

const photo = photos[activePhoto]?.attributes
  return (
    <>
       <Modal
      yOffset={"15vh"}
        opened={opened}
        onClose={close}
     title={"Foto " + (activePhoto + 1) + "/" + photos.length}
       size={"xl"}
        radius={0}
        transitionProps={{ transition: 'fade', duration: 200 }}
        zIndex={10000}
      >
        <Image objectFit="cover" style={{zIndex: 25,}} fill radius="md" animate={true} src={"http://38.242.151.80:1336" + photo.url}/>
      </Modal>

   
    </>
  );
}