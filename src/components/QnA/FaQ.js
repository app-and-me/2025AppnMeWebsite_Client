import FaQTitle from "./FaQTitle";
import FaQList from "./FaQList"
import styles from "../../styles/QnA/FaQ.module.css"
export default function FaQ(){
    return(
        <div className={styles.allContainer}>
            <FaQTitle/>
            <FaQList/>
        </div>
    )
}