import React from "react";
import styles from "../../styles/Home/LanguageCard.module.css";

const languages = [
    "NodeJS", "NestJS", "Java", "React",
    "HTML", "VsCode", "Adobe", "Photoshop", "Figma",
];

export default function LanguageCard() {
    return (
        <div className={styles.languageCardContainer}>
            {languages.map((lang) => (
                <div key={lang}>
                    <img src={`/images/LanguageCard/${lang}.png`} alt={lang} />
                </div>
            ))}
        </div>
    );
}
