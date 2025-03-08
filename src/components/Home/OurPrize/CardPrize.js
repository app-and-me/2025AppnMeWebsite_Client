import { useEffect, useState } from "react"
import styles from "../../../styles/Prize/CardPrize.module.css"
import Button from "../../Common/Button"
import { useNavigate } from "react-router-dom"
export default function CardPrize() {
    const imgSrc = "/images/Prize/prize"
    const navigate = useNavigate()
    const handlePrize = () => {
        navigate('/Prize')
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <div className={styles.allContainer}>

            <div className={styles.contentContainer}>
                <img src={`${imgSrc}1.png`}></img>
                <img src={`${imgSrc}2.png`}></img>
                <img src={`${imgSrc}3.png`} onClick={handlePrize}></img>
            </div>

        </div >
    )
}