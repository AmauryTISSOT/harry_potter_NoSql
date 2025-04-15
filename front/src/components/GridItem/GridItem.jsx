import React from "react";
import styles from "./GridItem.module.css";

const GridItem = ({ item, gridArea }) => {
    return (
        <div
            style={{ gridArea: gridArea }}
            className={styles.GridItemContainer}
        >
            {item}
        </div>
    );
};

export default GridItem;
