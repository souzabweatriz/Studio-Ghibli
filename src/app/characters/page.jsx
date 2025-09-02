"use client";
import Link from "next/link";
import styles from "./Characters.module.css";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://ghibliapi.vercel.app/people");
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error("Erro ao buscar personagens:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Characters from Studio Ghibli</h1>
      <div className={styles.cards}>
        {characters.map((character) => (
          <Link
            key={character.id || character.name}
            href={`/characters/${character.id}`}
            className={styles.cardLink}
          >
            <Card character={character} />
          </Link>
        ))}
      </div>
    </div>
  );
}
