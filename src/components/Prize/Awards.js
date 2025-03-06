import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    fetch("/Data/Awards.json")
      .then((response) => response.json())
      .then((data) => {
        setProfilesData(data); 
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  return (
    <div className={styles.awardsContainer}>
      {profilesData.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </div>
  );
};

export default Awards;
