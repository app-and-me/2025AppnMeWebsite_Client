import { useEffect, useState } from "react"
import styles from "../../../styles/Prize/CardPrize.module.css"
import Button from "../../Common/Button"
export default function CardPrize() {
    const imgSrc = "/images/Prize/prize"

    return (
        <div className={styles.allContainer}>

            <div className={styles.contentContainer}>
                <img src={`${imgSrc}1.png`}></img>
                <img src={`${imgSrc}2.png`}></img>
                <img src={`${imgSrc}2.png`}></img>
            </div>

        </div >
    )
}