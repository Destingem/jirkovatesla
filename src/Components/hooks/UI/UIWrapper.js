import Navbar from "./Navbar";
import Footer from "./Footer";
import { useViewportSize } from "@mantine/hooks";
import useDevice from "../useDevice";
import NavBarMobile from "./NavbarMobile";
export default function UIWrapper({ children }) {
  const { height, width } = useViewportSize();
  const device = useDevice(width);
  return (
    <div style={{overflow: "hidden"}}>
   {device == "m" ? <NavBarMobile /> : <Navbar />}
      <div className="ui-wrapper__content" style={{backgroundColor: "#fff", position: "relative", zIndex: "1800"}}>{children}</div>
        <Footer />
    </div>
  );
}