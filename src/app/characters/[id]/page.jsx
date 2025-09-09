"use client";

import { useState, useEffect } from "react";
import { Card, Spin, Button, Descriptions } from "antd";
import { ArrowLeftOutlined, EnvironmentOutlined, VideoCameraOutlined } from "@ant-design/icons";
import Link from "next/link";
import axios from "axios";
import styles from "./[id].module.css";

export default function CharacterPage({ params }) {
    const [character, setCharacter] = useState(null);
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCharacter = async (id) => {
        try {
            const response = await axios.get(`https://ghibliapi.vercel.app/people/${id}`);
            setCharacter(response.data);
            if (response.data.films && response.data.films.length > 0) {
                const filmResponses = await Promise.all(
                    response.data.films.map((filmUrl) => axios.get(filmUrl))
                );
                setFilms(filmResponses.map((filmRes) => filmRes.data));
            }
        } catch (error) {
            console.error("Error fetching character data:", error);
        } finally {
            setLoading(false);
        }
    };
    

    useEffect(() => {
        if (params.id) {
            fetchCharacter(params.id);
        }
    }, [params.id]);

    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.loadingWrapper}>
                    <Spin size="large" />
                    <p className={styles.loadingText}>Loading Details...</p>
                </div>
            </div>
        );
    }

    if (!character) {
        return (
            <div className={styles.container}>
                <div className={styles.errorWrapper}>
                    <h3>Character not found</h3>
                    <Link href="/characters">
                        <Button type="primary" icon={<ArrowLeftOutlined />}>
                            Back to list
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.backButton}>
                <Link href="/characters">
                    <Button icon={<ArrowLeftOutlined />}>
                        Back to list
                    </Button>
                </Link>
            </div>
            <Card className={styles.card} title={character.name} bordered={false} style={{ width: 400 }}>
                <Descriptions column={1} bordered>
                    <Descriptions.Item label={<EnvironmentOutlined />}>
                        <strong>Gender:</strong> {character.gender || "Unknown"}
                    </Descriptions.Item>
                    <Descriptions.Item label={<EnvironmentOutlined />}>
                        <strong>Age:</strong> {character.age || "Unknown"}
                    </Descriptions.Item>
                    <Descriptions.Item label={<EnvironmentOutlined />}>
                        <strong>Eye Color:</strong> {character.eye_color || "Unknown"}
                    </Descriptions.Item>
                    <Descriptions.Item label={<EnvironmentOutlined />}>
                        <strong>Hair Color:</strong> {character.hair_color || "Unknown"}
                    </Descriptions.Item>
                    <Descriptions.Item label={<VideoCameraOutlined />}>
                        <strong>Films Featured In:</strong> {films.length}
                    </Descriptions.Item>
                </Descriptions>
            </Card>

            <div className={styles.films}>
                {films.length > 0 ? (
                    films.map((film) => (
                        <Card
                            key={film.id}
                            className={styles.filmCard}
                            title={film.title}
                            cover={<img alt={film.title} src={film.image} />}
                        >
                            <p><strong>Director:</strong> {film.director}</p>
                            <p><strong>Release Date:</strong> {film.release_date}</p>
                            <p><strong>Running Time:</strong>{film.running_time}</p>
                            <p>{film.description}</p>
                        </Card>
                    ))
                ) : (
                    <p>No films found for this character.</p>
                )}
            </div>
        </div>
    );
}