import { Container, Title, Accordion } from '@mantine/core';
import classes from './FaqSimple.module.css';
import SubTitle from '../hooks/UI/SubTitle';



export function FAQDetails({device, faq}) {
  if(device == "m"){
    return (
  
      <div style={{ display: "flex", flexDirection: "column", gap: "3vh", padding: "0 10vw" }}>
      {" "}
      <SubTitle href={"#"} device={device} label={"FAQ"}>
        {faq.name}
      </SubTitle>
  
        <Accordion variant="separated">
          {faq.items.map(item => (
            <Accordion.Item key={item.id} className={classes.item} value={item.id}>
              <Accordion.Control>{item.question}</Accordion.Control>
              <Accordion.Panel>{item.answer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
   
    );
  } else if(device == "t"){
    return (
  
      <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
      {" "}
      <SubTitle href={"#"} device={device} label={"FAQ"}>
      {faq.name}
      </SubTitle>
  
        <Accordion variant="separated">
          {faq.items.map(item => (
            <Accordion.Item key={item.id} className={classes.item} value={item.id}>
              <Accordion.Control>{item.question}</Accordion.Control>
              <Accordion.Panel>{item.answer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
   
    );
  } else{
    return (
  
      <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
      {" "}
      <SubTitle href={"#"} device={device} label={"FAQ"}>
      {faq.name}
      </SubTitle>
  
        <Accordion variant="separated">
          {faq.items.map(item => (
            <Accordion.Item key={item.id} className={classes.item} value={item.id}>
              <Accordion.Control>{item.question}</Accordion.Control>
              <Accordion.Panel>{item.answer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
   
    );
  }
}
