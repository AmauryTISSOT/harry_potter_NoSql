import React from "react";
import styles from "./Grid.module.css";
import GridItem from "../GridItem/GridItem";
import StudentPerHouse from "../DataVisualization/StudentPerHouse";
import CharactersPerSpecies from "../DataVisualization/CharactersPerSpecies";
import WoodPerHand from "../DataVisualization/WoodPerHand";
import CorePerHand from "../DataVisualization/CorePerHand";
import ActorOrNot from "../DataVisualization/ActorOrNot";

export const Grid = () => {
    return (
        <div className={styles.grid}>
            <div style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
                <GridItem item={<StudentPerHouse />} />
            </div>
            <div style={{ gridColumnStart: 3, gridColumnEnd: 5 }}>
                <GridItem item={<WoodPerHand />} />
            </div>
            <div style={{ gridColumnStart: 1, gridColumnEnd: 5 }}>
                <GridItem item={<CharactersPerSpecies />} />
            </div>
            <div style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
                <GridItem item={<CorePerHand />} />
            </div>
            <div style={{ gridColumnStart: 3, gridColumnEnd: 5 }}>
                <GridItem item={<ActorOrNot />} />
            </div>
        </div>
    );
};
