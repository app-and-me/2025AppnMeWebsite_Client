import DotTitle from "../../Common/DotTitle";
import KeyWordButton from "./KeyWordButton";
import ActivityInfoCard from "./ActivityInfoCard";
import styles from "../../../components/Home/Activity/MainActivity.module.css"
export default function MainActivity() {
    return (
        <div className={styles["allContainer"]}>
            <div className={styles["title-container"]}>
                <div style={{ marginBottom: "30px" }}><DotTitle dotTitle={"Activity"} /></div>
                <span>활발한 외부 활동</span>
                <p>학교에서 배우는 것 보다 더 다양한 경험으로  각종 세미나/헤커톤/공모전/전시 등에 참가합니다.
                    다양한 외부활동을 통해 더 넓은 세상을 바라보는 학생으로 성장할 수 있습니다.</p>
            </div>

            <div style={{ margin: "40px 0 70px 0" }}> <KeyWordButton /></div>
            {/* <ActivityInfoCard /> */}
        </div>
    )
}