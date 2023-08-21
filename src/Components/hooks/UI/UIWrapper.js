import Navbar from "./Navbar";
import Footer from "./Footer";
export default function UIWrapper({ children }) {
  return (
    <div style={{overflow: "hidden"}}>
    <Navbar />
      <div className="ui-wrapper__content" style={{backgroundColor: "#fff", position: "relative", zIndex: "1800"}}>{children}</div>
        <Footer />
    </div>
  );
}