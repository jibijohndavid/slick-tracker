import React from "react";

import Sidebar from "./components/Sidebar";
import useStyles from "./styles";

interface IMainLayoutProps {
  children: React.ReactChild;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.body}>{children}</main>
    </div>
  );
};

export default MainLayout;
