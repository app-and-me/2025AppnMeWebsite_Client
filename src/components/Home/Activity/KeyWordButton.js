import styles from "../../../components/Home/Activity/KeyWordButton.module.css"

export default function KeyWordButton() {
    const keyWords = ["UX Design", "Development skills", "a variety of projects", " Experience", "UI Design", "Collaboration", "Communicate", "Present", "Fast Loading", "User-Friendly", "Contact Now"]
    return (
        <div className={styles["btn-container"]}>
            {keyWords.map((item) => (
                <div>{item}</div>
            ))}
        </div>
    )
}