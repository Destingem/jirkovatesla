import { Text, Card, RingProgress, Group, useMantineTheme } from '@mantine/core';
import classes from './StatsRingCard.module.css';

const stats = [
  
  { value: 76, label: 'Spokojených zákazníků' },
];

export function StatsRingCard() {
  const theme = useMantineTheme();
  const completed = 95;
  const total = 100;
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text className={classes.label}>{stat.value}</Text>
      <Text size="xs" c="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder p="xl" radius="md" className={classes.card} style={{backdropFilter: 'blur(10px)'}}>
      <div className={classes.inner}>
        <div>
          <Text fz="xl" className={classes.label}>
            Rezervace
          </Text>
          <div>
            <Text className={classes.lead} mt={30}>
              1887
            </Text>
            <Text fz="xs" c="dimmed">
              Volných termínů
            </Text>
          </div>
          <Group mt="lg">{items}</Group>
        </div>

        <div className={classes.ring}>
          <RingProgress
            roundCaps
            color="#E66A6A"
            thickness={6}
            size={150}
            sections={[{ value: (completed / total) * 100, color: theme.colors.primaryN }]}
            label={
              <div>
                <Text ta="center" fz="lg" className={classes.label}>
                  {((completed / total) * 100).toFixed(0)}%
                </Text>
                <Text ta="center" fz="xs" c="dimmed">
                  Spokojených zákazníků
                </Text>
              </div>
            }
          />
        </div>
      </div>
    </Card>
  );
}