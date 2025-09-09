import styles from "./Card.module.css";

export default function Card({ character }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.name}><span>{character.name}</span></h2>
            <p>Gender: {character.gender}</p>
            <p>Age: {character.age || "Unknown"}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Hair Color: {character.hair_color}</p>
        </div>
    );
}