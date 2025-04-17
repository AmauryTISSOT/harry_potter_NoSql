import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
