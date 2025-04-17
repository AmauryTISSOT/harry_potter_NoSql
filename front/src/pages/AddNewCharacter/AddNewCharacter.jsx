import React from "react";
import AddNewCharacterForm from "../../components/AddNewCharacterForm/AddNewCharacterForm";
import styles from "./AddNewCharacter.module.css";

const AddNewCharacter = () => {
    return (
        <div className={styles.formContainer}>
            <AddNewCharacterForm />
        </div>
    );
};

export default AddNewCharacter;
