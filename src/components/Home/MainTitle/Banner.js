import styles from "../../../styles/Home/Banner.module.css"
export default function Banner({ height }) {
    return (

        <div className={styles.bannerContainer}>
            <img src="images/Logo/backGif.gif" style={{ height }}></img>
        </div>
    )
}