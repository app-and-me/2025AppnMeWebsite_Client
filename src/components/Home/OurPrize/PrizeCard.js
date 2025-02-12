import styles from "../../../styles/Home/PrizeCard.module.css"
import PrizeInfoBtn from "../../../components/Home/OurPrize/PrizeInfoBtn"
export default function PrizeCard() {
    const PrizeDatas = [
        {
            id: 1,
            src: "images/Prize/HighDreaming.jpg",
            name: "SK하이닉스 하인슈타인 데모데이",
            mainType: "데모데이",
            subType: "발표상",
            number: '9명'

        },
        // {
        //     id: 2,
        //     src: "images/Prize/HighDreaming.jpg",
        //     name: "SK하이닉스 하인슈타인 데모데이",
        //     mainType: "데모데이",
        //     subType: "발표상",
        //     number: 9

        // }
    ]
    return (
        <div className={styles["card-all-container"]}>
            {PrizeDatas.map((item) => (
                <div key={item.id} className={styles["card-container"]}>
                    <img src={item.src}></img>
                    <div className={styles.prizeName}>{item.name}</div>

                    <div className={styles["detail-container"]}>
                        <PrizeInfoBtn mainType={item.mainType} subType={item.subType} />
                        <PrizeInfoBtn mainType={item.number} subType={"App&ME"} />
                    </div>
                </div>
            ))}
        </div>
    )
}