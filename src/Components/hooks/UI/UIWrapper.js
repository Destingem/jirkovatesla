import Navbar from "./Navbar";
import Footer from "./Footer";
import { useViewportSize } from "@mantine/hooks";
import useDevice from "../useDevice";
import NavBarMobile from "./NavbarMobile";
import { useEffect, useState } from "react";

export default function UIWrapper({ children }) {
  const { height, width } = useViewportSize();
  const device = useDevice(width);

  const [data, setData] = useState(null);
  {/*useEffect(()=> {
      let fetchFunction = async ()=>{
         try {
           var data = await fetch("https://www.polystyrensypany.cz/api/getKontakty")
         } catch (error) {
          console.log(error);
         }
          if(!data || !data.ok){
              return null
          }
          data = await data.json();
          if (data.kontaktniUdaje){
              return data.kontaktniUdaje
          } else {
              return null
          }
      }
      fetchFunction().then(data => setData(data))
  }, [])*/}
  return (
    <div style={{overflow: "hidden"}}>
   {device == "m" ? <NavBarMobile /> : <Navbar />}
      <div className="ui-wrapper__content" style={{backgroundColor: "#fff", position: "relative", zIndex: "1800"}}>{children}</div>
        <Footer />
    </div>
  );
}