import React, { ReactNode } from "react";
import SideBar from "@/components/sidebar/index";
import Navbar from "@/components/navBar";
import styles from "./dashboard.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
      <SideBar/>
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
