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
import NumberOfPatronus from "../DataVisualization/NumberOfPatronus";
import WandSize from "../DataVisualization/WandSize";
import WandSizePerGender from "../DataVisualization/WandSizePerGender";
import WandSizePerHouse from "../DataVisualization/WandSizePerHouse";
import DeathByGender from "../DataVisualization/DeathByGender";
import WizardVsMuggle from "../DataVisualization/WizardVsMuggle";
import ApparitionsTotal from "../DataVisualization/ApparitionsTotal";
import Apparitionhpinmovies from "../DataVisualization/Apparitionhpinmovies";

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
            <div style={{ gridColumnStart: 1, gridColumnEnd: 5 }}>
                <GridItem item={<NumberOfPatronus />} />
            </div>
            <div style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
                <GridItem item={<WandSize />} />
            </div>
            <div style={{ gridColumnStart: 3, gridColumnEnd: 5 }}>
                <GridItem item={<WandSizePerGender />} />
            </div>
            <div style={{ gridColumnStart: 1, gridColumnEnd: 5 }}>
                <GridItem item={<WandSizePerHouse />} />
            </div>
            <div style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
                <GridItem item={<DeathByGender />} />
            </div>
            <div style={{ gridColumnStart: 3, gridColumnEnd: 5 }}>
                <GridItem item={<WizardVsMuggle />} />
            </div>
            <div style={{ gridColumnStart: 1, gridColumnEnd: 5 }}>
                <GridItem item={<ApparitionsTotal />} />
            </div>
            <div style={{ gridColumnStart: 1, gridColumnEnd: 5 }}>
                <GridItem item={<Apparitionhpinmovies />} />
            </div>
        </div>
    );
};
