import React from "react";
import styles from "./Grid.module.css";
import GridItem from "../GridItem/GridItem";
import FakeChart from "../fakeChart/fakeChart";

export const Grid = () => {
    return (
        <div className={styles.grid}>
            <GridItem item={<FakeChart />} />
            <GridItem item={<FakeChart />} />
            <GridItem item={<FakeChart />} />
        </div>
    );
};
