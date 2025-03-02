import styles from "../../styles/QnA/OptionBtn.module.css"

export default function OptionBtn({ onEdit, onDeleteClick }) {
    return (
        <div className={styles.optionContainer}>
            <p className={styles.edit} onClick={onEdit}>수정하기</p>
            <p className={styles.delete} onClick={onDeleteClick}>삭제하기</p>
        </div >
    )
}