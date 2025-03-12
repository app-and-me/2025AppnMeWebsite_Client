
import ActivityInfoCard from "./ActivityInfoCard"
import styles from "../../../styles/Home/ActivityCard.module.css"
export default function ActivityCardMain() {

    return (
        <div className={styles.allContainer}>
            <div className={styles.firstLine}>
                <ActivityInfoCard title={"SK하이닉스 하인슈타인 데모데이"}
                    content={"SK하이닉스에서 주최한 SK하이닉스 하인슈타인 데모데이 프로젝트에 동아리로 참여하여기존 동아리 신청 사이트의 문제점을 개선한 CA동아리 신청 사이트를 개발하여 발표상이라는 성과를 냈습니다."}
                    src={"01.jpg"}
                    height={"300px"}
                    className={styles["firstImg"]}
                />

                <ActivityInfoCard
                    title={"Smarteen App+ Challenge"}
                    content={"앱앤미 동아리 부원들과 팀을 구성해 스마틴 앱 챌린지 공모전에 참여했습니다."}
                    src={"03.png"}
                    className={styles["secondImg"]}
                />
                <ActivityInfoCard
                    title={"SW 동행 챌린지 해커톤"}
                    content={"SW 동행 챌린지 해커톤에 참여해 무박 2일의 해커톤을 경험할 수 있었습니다."}
                    src={"04.jpg"}
                    className={styles["secondImg"]}
                />


            </div>

            <div className={styles.secondLine}>
                <ActivityInfoCard
                    title={"Maker Faire Seoul"}
                    content={"저희의 개발 작품을 전시하며 앱앤미로서 메이커 페어 서울에 참가하였고, 다양한 전시품들을 구경할 기회가 있었습니다."}
                    src={"02.jpg"}
                    className={styles["thirdImg"]}
                    showButton={false}
                />

                <ActivityInfoCard
                    title={"SW 동행 챌린지 데모데이"}
                    content={"SW 동행 프로젝트에 앱앤미로 참여하여 수업과 멘토링을 통해 개발된 작품을 데모데이에서 전시하였습니다. 다양한 기술을 배우고 실습하며 팀원들과 협업하는 소중한 경험을 쌓을 수 있었습니다. 또한, 데모데이를 통해 작품에 대한 피드백을 받고, 이를 바탕으로 개선하였습니다. "}
                    src={"05.jpg"}
                    className={styles["thirdImg"]}

                />
            </div>


        </div >
    )
}
