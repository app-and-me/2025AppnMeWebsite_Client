import styles from "../../../components/Home/Activity/ActivityInfoCard.module.css"
import Button from "../../Common/Button"

export default function ActivityInfoCard() {
    const ActivityData = [
        {
            id: 1,
            title: "SK하이닉스 하인슈타인 데모데이",
            content: "SK하이닉스에서 주최한 SK하이닉스 하인슈타인 데모데이 프로젝트에 동아리로 참여하여기존 동아리 신청 사이트의 문제점을 개선한 CA동아리 신청 사이트를 개발하여 발표상이라는 성과를 냈습니다.",
            src: "/images/Activity/Act01.jpg"
        },
        {
            id: 2,
            title: "Maker Faire Seoul",
            content: "저희의 개발 작품을 전시하며 앱앤미로서 메이커 페어 서울에 참가하였고, 다양한 전시품들을 구경할 기회가 있었습니다.",
            src: "/images/Activity/Act02.jpg"
        },
        {
            id: 3,
            title: "Smarteen App+ Challenge ",
            content: "앱앤미 동아리 부원들과 팀을 구성해 스마틴 앱 챌린지 공모전에 참여했습니다.",
            src: "images/Activity/Act03.png"
        },
        {
            id: 4,
            title: "SW 동행 챌린지 해커톤",
            content: "SW 동행 챌린지 해커톤에 참여해 무박 2일의 해커톤을 경험할 수 있었습니다.",
            src: "images/Activity/Act04.jpg"
        },
        {
            id: 5,
            title: "SW 동행 챌린지 데모데이",
            content: "SW 동행 프로젝트에 앱앤미로 참여하여 수업과 멘토링을 통해 개발된 작품을 데모데이에서 전시를 하였습니다.",
            src: "images/Activity/Act05.jpg"
        }

    ]
    return (
        <div className={styles["ActivityCard-container"]}>
            {ActivityData.map((item) => (
                <div className={styles.cardContainer}>
                    <img className={styles.img} src={item.src} alt={item.title} width="100%" height="auto" />

                    <div className={styles["title-container"]}>
                        {item.title}
                        {item.id !== 2 && item.id !== 3 &&
                            <Button text={"PRIZE"} borderRadius={"8px"} width={"49px"} height={"26px"} fontSize={"12px"} />}
                    </div>

                    <div className={styles["content-container"]}>{item.content}</div>
                </div>
            ))
            }
        </div >
    )
}
