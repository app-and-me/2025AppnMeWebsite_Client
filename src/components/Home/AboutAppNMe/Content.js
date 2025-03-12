import styled from "styled-components";
import styles from "../../../styles/Home/Pages/HomePage.module.css"
export default function Content({ title1, title2, marginTop }) {
    const TitleStyle = styled.div`
    p   {
         color: #FFFFFF99;
    }
    @media (max-width: 600px) {
       
    }
    `
    return (
        <TitleStyle>
            <p className={styles.content} style={{ marginTop: marginTop, lineHeight: "26px", display: "inline" }}>{title1}</p>
            <p className={styles.content} style={{ marginTop: "2px", display: "inline", lineHeight: "1.4" }}>{title2}</p>
        </TitleStyle>
    )
}