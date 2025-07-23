import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Toast from "../Toast/Toast";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      
      <Toast />
    </>
  );
}

export default Layout;
