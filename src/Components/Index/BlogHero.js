import { Card, Avatar, Text, Progress, Badge, Group, ActionIcon } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';
import Link from 'next/link';

const avatars = [
  'https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
];

export function TaskCard({card, blog}) {
 
  const bc = blog[blog.length - 1].attributes;
  console.log(bc)
  return (
  <Link href={"/blog/" + bc?.nazev.toLowerCase().replace(" ", "").normalize('NFD').replace(/[\u0300-\u036f]/g, '')}>
      <Card withBorder padding="lg" radius="md" style={{backgroundColor: "rgb(255,255,255,0.8)", backdropFilter: 'blur(10px)', height: "100%"}}>
      <div style={{display: "flex", justifyContent: "space-between"}}>
     <Text weight={700} size={"xl"}>{card?.blog_label}</Text>
        <Badge>{new Date(bc?.datum).toLocaleDateString()}</Badge>
      </div>

      <Text fz="lg" fw={500} mt="md">
       {bc?.nazev}
      </Text>
      <Text fz="sm" c="dimmed" mt={5} sx={{maxWidth: "20vw"}}>
      {bc?.kratky_popis}
      </Text>

      <Text c="dimmed" fz="sm" mt="md">
        Čas čtení:{' '}
        <Text span fw={500} c="bright">
        {Math.round(bc?.kratky_popis.length / 5.5 / 10)} minuty
        </Text>
      </Text>

    

      <Group justify="space-between" mt="md">
      <Avatar src={avatars[0]} radius="xl" />
       <div>
        <Text>{bc?.autor}</Text>
       
       </div>
      </Group>
    </Card>
  </Link>
  );
}