import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p className={styles.text}>© 2024 Studio Ghibli. All rights reserved.</p>
        </div>
    );
}