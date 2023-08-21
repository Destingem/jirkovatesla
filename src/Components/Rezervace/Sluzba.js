import { Text, Title, useMantineTheme } from "@mantine/core";

export default function Sluzba({productChoices}){
    const theme = useMantineTheme();
    return(
        <section style={{marginBottom: "5vh"}}>

        <Title
          weight={600}
          order={2}
          size={"2.3rem"}
          style={{ padding: "5vh 5vw" }}
        >
          Vyberte službu
        </Title>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3vh",
            padding: "0 5vw",
          }}
        >
          {productChoices.map(({ name, value, icon }, i) => {
            return (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "3vh 5vw",
                  backgroundColor: theme.colors.neutral[0],
                  border: `3px solid ${theme.colors.neutral[1]}`,
                  borderRadius: "6px",
              
                }}
              >
                <Text weight={600} size={"1.5rem"}>{name}</Text>
                {icon}
              </div>
            );
          })}
        </div>
      </section>
    )
}