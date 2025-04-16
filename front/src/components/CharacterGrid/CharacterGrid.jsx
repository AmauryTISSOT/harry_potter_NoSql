import React from "react";
import styles from "./CharacterGrid.module.css";
import { useState, useEffect } from "react";
import CharactersApi from "../../services/CharactersApi";
import CharacterTile from "../CharacterTile/CharacterTile";

const CharacterGrid = () => {
    const [characters, setCharacters] = useState([]);

    const fetchCharacters = async () => {
        try {
            const response = await CharactersApi.getAllCharacters();
            setCharacters(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    return (
        <>
            {characters.length > 0 ? (
                <div className={styles.charGrid}>
                    {characters.map((character, id) => (
                        <div key={id} className={styles.card}>
                            <CharacterTile character={character} />
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading characters...</p>
            )}
        </>
    );
};

export default CharacterGrid;
