import { Card, Avatar, Text, Progress, Badge, Group, ActionIcon } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';

const avatars = [
  'https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
];

export function TaskCard() {
  return (
    <Card withBorder padding="lg" radius="md" style={{backgroundColor: "rgb(255,255,255,0.8)", backdropFilter: 'blur(10px)', height: "100%"}}>
      <div style={{display: "flex", justifyContent: "space-between"}}>
     <Text weight={700} size={"xl"}>Blog</Text>
        <Badge>1. září</Badge>
      </div>

      <Text fz="lg" fw={500} mt="md">
        Jakou první zážitkovou jízdu zvolit?
      </Text>
      <Text fz="sm" c="dimmed" mt={5}>
        Dnes vám poradíme, jak si vybrat svou první zážitkovou jízdu a co od ní očekávat.
      </Text>

      <Text c="dimmed" fz="sm" mt="md">
        Tasks completed:{' '}
        <Text span fw={500} c="bright">
          23/36
        </Text>
      </Text>

    

      <Group justify="space-between" mt="md">
      <Avatar src={avatars[0]} radius="xl" />
       <div>
        <Text>Ondřej Zaplatílek</Text>
        <Text size={"sm"}>autíčkář</Text>
       </div>
      </Group>
    </Card>
  );
}