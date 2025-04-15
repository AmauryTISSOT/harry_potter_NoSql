import React from "react";
import styles from "./GridItem.module.css";

const GridItem = ({ item }) => {
    return <div className={styles.GridItemContainer}>{item}</div>;
};

export default GridItem;
