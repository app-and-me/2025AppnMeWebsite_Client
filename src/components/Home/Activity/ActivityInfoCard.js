import styles from "../../../components/Home/Activity/ActivityInfoCard.module.css"
import Button from "../../Common/Button"

export default function ActivityInfoCard({ title, content, src, className }) {
    return (
        <div>
            <div className={styles.cardContainer}>
                <img className={`${styles.img} ${className ? className : ""}`} src={`/images/Activity/Act${src}`} width="100%" height="auto" />
                <div className={styles.detail}>
                    <div className={styles["title-container"]}>
                        {title}
                        <Button text={"PRIZE"} borderRadius={"8px"} width={"49px"} height={"26px"} fontSize={"12px"} />
                    </div>
                    <div className={styles["content-container"]}>{content}</div>
                </div>
            </div>
        </div>



    )
}
