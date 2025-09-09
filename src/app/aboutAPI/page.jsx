import styles from './aboutAPI.module.css';

export default function AboutAPI() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>oi</h1>
            <div className={styles.content}>
                <p>This project uses the Studio Ghibli API, which provides access to information about Studio Ghibli films, characters, locations, and more. The API is a great resource for developers looking to integrate Studio Ghibli data into their applications.</p>
                <p>For more information about the Studio Ghibli API, you can visit the official documentation at <a href="https://ghibliapi.vercel.app/" target="_blank" rel="noopener noreferrer">https://ghibliapi.vercel.app/</a>.</p>
            </div>
        </div>
    )
}