import React from "react";
import styles from "./Grid.module.css";
import GridItem from "../GridItem/GridItem";
import FakeChart from "../fakeChart/fakeChart";
import StudentPerHouse from "../DataVisualization/StudentPerHouse";
import CharactersPerSpecies from "../DataVisualization/CharactersPerSpecies";

export const Grid = () => {
    return (
        <div className={styles.grid}>
            <GridItem gridArea={"box-1"} item={<StudentPerHouse />} />
            <GridItem gridArea={"box-2"} item={<FakeChart />} />
            <GridItem gridArea={"box-3"} item={<CharactersPerSpecies />} />
        </div>
    );
};
