import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Home/Footer.module.css"
export default function Footer() {

    const MoveToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
        MoveToTop()
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.logoSection}>
                    <img src="/images/Logo/logo.png" onClick={handleClick} style={{ cursor: "pointer" }}></img>
                </div>

                <div className={styles.pagesSection}>
                    <div classNam={styles.pages}>Pages</div>
                    <ul>
                        <li onClick={MoveToTop}><Link to="/">Home</Link></li>
                        <li onClick={MoveToTop}><Link to="/AboutUs">About Us</Link></li>
                        <li onClick={MoveToTop}><Link to="/Prize">Prize</Link></li>
                        <li onClick={MoveToTop}><Link to="/JoinUs">Join Us</Link></li>
                        <li onClick={MoveToTop}><Link to="/QnA">Q&A</Link></li>
                    </ul>
                </div>

                <div className={styles.socialSection}>
                    <div className={styles.social}>Social</div>

                    <ul>
                        <li>
                            <a href="https://www.instagram.com/app_and_me?igsh=a25jNHFzMmF6cHJi">
                                Instagram
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
            <div className={styles.web}>2025 App & Me Website</div>
        </footer>
    );
}
