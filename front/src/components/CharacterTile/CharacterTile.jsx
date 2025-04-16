import React from "react";
import styles from "./CharacterTile.module.css";

const CharacterTile = ({ character }) => {
    const { name, actor, image, house, wizard } = character;

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img
                    src={
                        image ||
                        "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-vector-600nw-1745180411.jpg"
                    }
                    alt={name}
                    className={styles.image}
                />
            </div>
            <div className={styles.info}>
                <h2 className={styles.name}>{name}</h2>
                <p>
                    <strong>Acteur :</strong> {actor}
                </p>
                <p>
                    <strong>Maison :</strong> {house || "inconnue"}
                </p>
                <p>
                    <strong>Sorcier :</strong> {wizard ? "Oui" : "Non"}
                </p>
            </div>
        </div>
    );
};

export default CharacterTile;
