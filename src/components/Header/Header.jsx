import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Image 
                src="/images/logo.png" 
                alt="Logo com personagens do Studio Ghibli" 
                width={250} 
                height={100} 
                />
                <p className={styles.title}>Studio Ghibli</p>
            </div>
            <div className={styles.links}>
                <Link className={styles.link} href="/">Home</Link>
                <Link className={styles.link} href="/about">About API</Link>
                <Link className={styles.link} href="/contact">Contact</Link>
                <Link className={styles.link} href="/characters">Characters</Link>
            </div>
        </div>
    );
}