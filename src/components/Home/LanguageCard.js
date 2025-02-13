import React from "react";
import styles from "../../styles/Home/LanguageCard.module.css";

export default function LanguageCard() {
    return (
        <div className={styles.languageCardContainer}>
            <div><img src="/images/LanguageCard/Figma.png" alt="Figma" /></div>
            <div><img src="/images/LanguageCard/VsCode.png" alt="VsCode" /></div>
            <div><img src="/images/LanguageCard/Java.png" alt="Java" /></div>

            <div><img src="/images/LanguageCard/Adobe.png" alt="Adobe" /></div>
            <div><img src="/images/LanguageCard/HTML.png" alt="HTML" /></div>
            <div><img src="/images/LanguageCard/NestJS.png" alt="NestJS" /></div>

            <div><img src="/images/LanguageCard/NodeJS.png" alt="NodeJS" /></div>
            <div><img src="/images/LanguageCard/React.png" alt="React" /></div>
            <div><img src="/images/LanguageCard/Photoshop.png" alt="Photoshop" /></div>
        </div>
    );
}
