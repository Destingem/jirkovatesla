import { Text, Card, RingProgress, Group, useMantineTheme } from '@mantine/core';
import classes from './StatsRingCard.module.css';


export function StatsRingCard({card}) {
  const theme = useMantineTheme();
  const completed = 95;
  const total = 100;

  return (
    <Card withBorder p="xl" radius="md" className={classes.card} style={{backdropFilter: 'blur(10px)'}}>
      <div className={classes.inner}>
        <div>
          <Text fz="xl" className={classes.label}>
            {card?.stats_label}
          </Text>
          <div>
            <Text className={classes.lead} mt={30}>
            {card?.stats_number1}
            </Text>
            <Text fz="xs" c="dimmed">
              {card?.stats_number1_label}
            </Text>
          </div>
          <div key={card?.stats_number2}>
      <Text className={classes.label}>{card?.stats_number2}</Text>
      <Text size="xs" c="dimmed">
        {card?.stats_number2_label}
      </Text>
    </div>   
        </div>
      

        <div className={classes.ring}>
          <RingProgress
            roundCaps
            color="#E66A6A"
            thickness={6}
            size={150}
            sections={[{ value: card?.stats_ring_value, color: theme.colors.primaryN }]}
            label={
              <div>
                <Text ta="center" fz="lg" className={classes.label}>
                  {card?.stats_ring_value + " %"}
                </Text>
                <Text ta="center" fz="xs" c="dimmed">
                 {card?.stats_ring_label}
                </Text>
              </div>
            }
          />
        </div>
      </div>
    </Card>
  );
}