import React from "react";
import styles from "./Grid.module.css";
import GridItem from "../GridItem/GridItem";
import StudentPerHouse from "../DataVisualization/StudentPerHouse";
import CharactersPerSpecies from "../DataVisualization/CharactersPerSpecies";
import WoodPerHand from "../DataVisualization/WoodPerHand";
import CorePerHand from "../DataVisualization/CorePerHand";
import ActorOrNot from "../DataVisualization/ActorOrNot";
import StaffOrStudent from "../DataVisualization/StaffOrStudent";
import GenderInHogwards from "../DataVisualization/GenderInHogwards";
import GenderPerHouse from "../DataVisualization/GenderPerHouse";
import AncestryInHogwards from "../DataVisualization/AncestryInHogwards";
import AncestryInEachHouse from "../DataVisualization/AncestryInEachHouse";
import AliveOrDead from "../DataVisualization/AliveOrDead";

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
            <div style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
                <GridItem item={<StaffOrStudent />} />
            </div>
            <div style={{ gridColumnStart: 3, gridColumnEnd: 5 }}>
                <GridItem item={<GenderInHogwards />} />
            </div>
            <div style={{ gridColumnStart: 1, gridColumnEnd: 5 }}>
                <GridItem item={<GenderPerHouse />} />
            </div>
            <div style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
                <GridItem item={<AncestryInHogwards />} />
            </div>
            <div style={{ gridColumnStart: 3, gridColumnEnd: 5 }}>
                <GridItem item={<AliveOrDead />} />
            </div>
            <div style={{ gridColumnStart: 1, gridColumnEnd: 5 }}>
                <GridItem item={<AncestryInEachHouse />} />
            </div>
        </div>
    );
};
