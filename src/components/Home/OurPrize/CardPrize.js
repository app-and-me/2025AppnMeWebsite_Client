import { useEffect, useState } from "react"
import styles from "../../../styles/Prize/CardPrize.module.css"
export default function CardPrize(){
    const [prizeData, setPrizeData] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await fetch("/data/Prize.json");
                const data = await response.json();  
                setPrizeData(data);  
            } catch (error) {
                console.error("에러 발생", error);
            }
        }   
        fetchData();
    },[])
    return(
        <div className={styles.allContainer}>
            {prizeData.map((item)=>(
                <div className={styles.contentContainer}>
                    <img src={item.src}></img>
                    <span style={{display:"flex", fontSize:"18px"}}>{item.name}</span>


                   <div style={{display:"flex", gap:"10px", marginTop:"15px"}}> 
                    <div className={styles["infoBtn"]}>
                        <span style={{ color: "white" }}>{item.mainType}</span>
                        <span style={{ color: "#FFFFFF99" }}> / {item.subType}</span>
                    </div>

                    <div className={styles["infoBtn"]}>
                        <span>{item.number}</span>
                        <span>APP & ME</span>
                    </div>
                    </div>

                </div>
            ))}
        </div>
    )
}