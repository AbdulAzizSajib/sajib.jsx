import { Outlet } from "react-router-dom";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";

const Root = () => {
  // Define styles object
  const styles = {
    root: {
      fontFamily: "Poppins, sans-serif",
    },
  };

  return (
    <div style={styles.root} className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
