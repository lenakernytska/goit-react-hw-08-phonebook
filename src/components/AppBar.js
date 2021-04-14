import React from "react";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import styles from "./AppBar.module.css"




const AppBar = () => {
    return (
        <header className={styles.header}>
        <Navigation />
    <AuthNav/>
    </header>
    )
}

export default AppBar;