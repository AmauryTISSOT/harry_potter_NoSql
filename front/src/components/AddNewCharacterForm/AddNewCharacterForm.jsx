import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CharactersApi from "../../services/CharactersApi.js";
import styles from "./AddNewCharacterForm.module.css";

const schema = yup.object().shape({
    name: yup.string().required("Le nom est requis"),
    house: yup.string().required("La maison est requise"),
    wizard: yup.boolean().required("Le statut est requis"),
});

const AddNewCharacterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await CharactersApi.createNewCharacter(data);
            console.log("Succès !", response.data);
            alert("Personnage créé avec succès !");
        } catch (error) {
            console.error("Erreur lors de l’envoi :", error);
            alert("Une erreur est survenue.");
        }
    };

    return (
        <div className={styles.container}>
            <h3>Créer un personnage</h3>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.inputContainer}>
                    <label>Nom</label>
                    <input {...register("name")} />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>

                <div className={styles.inputContainer}>
                    <label>Acteur</label>
                    <input {...register("actor")} />
                </div>

                <div className={styles.inputContainer}>
                    <label>Maison</label>
                    <select {...register("house")}>
                        <option value="">-- Choisir une maison --</option>
                        <option value="Gryffindor">Gryffindor</option>
                        <option value="Slytherin">Slytherin</option>
                        <option value="Hufflepuff">Hufflepuff</option>
                        <option value="Ravenclaw">Ravenclaw</option>
                        <option value="Pas de maison">Pas de maison</option>
                    </select>
                    {errors.house && <p>{errors.house.message}</p>}
                </div>
                <div className={styles.inputContainer}>
                    <label>Le personnage est-il un sorcier ?</label>
                    <select {...register("wizard")}>
                        <option value="true">Oui</option>
                        <option value="false">Non</option>
                    </select>
                    {errors.wizard && <p>{errors.wizard.message}</p>}
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.submitButton}
                >
                    {isSubmitting ? "Envoi..." : "Envoyer"}
                </button>
            </form>
        </div>
    );
};

export default AddNewCharacterForm;
