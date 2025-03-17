import { useContext } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { MessageContext } from "../../context/MessageContext/MessageContext";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const { message } = useContext(MessageContext);

  return (
    <>
      <Header />
      {message.content && (
        <div className={`${styles.message} ${styles[`${message.type}`]}`}>
          {message.content}
        </div>
      )}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
