import React from "react";
import styles from "../../styles/Home/footer.module.css"; // CSS 스타일 파일을 import

export default function Footer({logoImg}) {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.logoSection}>
                    <img src={logoImg}></img>
                    <div className={styles.web}>2025 App & Me Website</div>

                </div>

                <div className={styles.pagesSection}>
                    <div classNam={styles.pages}>Pages</div>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Prize</li>
                        <li>Join Us</li>
                        <li>Q&A</li>
                    </ul>
                </div>

                <div className={styles.socialSection}>
                    <div className={styles.social}>Social</div>
                    <ul>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>

            {/* <div className={styles.footerBottom}>
                <div className={styles.web}>2025 App & Me Website</div>
            </div> */}
        </footer>
    );
}
