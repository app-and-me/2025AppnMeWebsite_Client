import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Prize/Awards.module.css";

const ProfileCard = ({ profile }) => {
    return (
        <div className={styles.profileCard}>
            <div className={styles.profileHeader}>
                <img src={profile.image} alt={profile.name} className={styles.profileImage} />
                <div className={styles.profileInfo}>
                    <div className={styles.profileName}>{profile.name}</div>
                    <div className={styles.profileBatch}>{profile.batch}</div>
                </div>
            </div>

            <div className={styles.awardsSection}>
                <ul className={styles.awardsList}>
                    {profile.awards.map((award, index) => (
                        <li key={index} className={styles.awardItem}>{award}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Awards = () => {
    const [profilesData, setProfilesData] = useState([]);
    const scrollRef = useRef(null);

    useEffect(() => {
        fetch("/Data/Awards.json")
            .then((response) => response.json())
            .then((data) => {
                setProfilesData([...data, ...data]);  // 데이터를 두 배로 복제
            })
            .catch((error) => {
                console.error("Error loading JSON data:", error);
            });
    }, []);
    

    return (
        <div className={styles.scrollContainer} ref={scrollRef}>
            <div className={styles.cardContainer}>
                {profilesData.map((profile, index) => (
                    <ProfileCard key={index} profile={profile} />
                ))}
            </div>
        </div>
    );
};

export default Awards;
