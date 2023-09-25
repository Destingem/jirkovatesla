import { Card, Image, Text, Group, Badge, Center, Button } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import Link from 'next/link';

const mockdata = [
  { label: '4 passengers', icon: IconUsers },
  { label: '100 km/h za 3,2s', icon: IconGauge },
  { label: 'Dojezd 320 km', icon: IconManualGearbox },
  { label: 'Nejvyšší konfigurace P100D', icon: IconGasStation },
];

export function FeaturesCard() {
  const features = mockdata.map((feature) => (
    <Center key={feature.label} style={{ flexDirection: 'row', alignItems: 'center' }}>
      <feature.icon size="1.05rem" style={{ marginRight: '5px', color: 'gray' }} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card 
      withBorder 
      radius="md" 
      style={{ backgroundColor: "rgb(255,255,255,0.8)", maxWidth: '20vw', backdropFilter: 'blur(10px)', minHeight: "43.8vh" }}
    >
      <Card.Section 
        style={{
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid gray',
          minHeight: '250px'
        }}
      >
        <Image src="https://i.imgur.com/ZL52Q2D.png" alt="Tesla Model S" />
      </Card.Section>

      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2vh 0 0 0"}}>
        <div>
          <Text fw={500}>Tesla Model S</Text>
          <Text fz="xs" c="dimmed">
            Nabíjení zcela zdarma
          </Text>
        </div>
        <Badge color='red' variant="outline">25% sleva</Badge>
      </div>

      <Card.Section 
        style={{
          padding: '16px',
          borderTop: '1px solid gray',
          marginTop: '16px'
        }}
      >
        <Text fz="sm" c="dimmed" style={{ fontSize: '12px', fontWeight: '700', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '-0.25px' }}>
          Informace o autě
        </Text>

        <Group gap={8} mb={-8}>
          {features}
        </Group>
      </Card.Section>

      <Card.Section style={{ padding: '16px', borderTop: '1px solid gray' }}>
        <Group gap={30}>
          <div>
            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
              1500 Kč
            </Text>
            <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1, marginTop: '3px' }}>
              za hodinu
            </Text>
          </div>

        
         <Button color="red" radius="xl" style={{ flex: 1, width: "100%" }}>
            Pronajmout
          </Button>
         
        </Group>
      </Card.Section>
    </Card>
  );
}
