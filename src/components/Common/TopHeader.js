import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Home/Header.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <button
                className={styles.menuButton}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="메뉴 열기"
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>


            <nav className={styles.nav}>

            <Link to="/" className={styles.logo}>
                    <img src="/images/Logo/logo.png" alt="App & Me Logo" />
                </Link>
                <ul className={`${styles.menuList} ${menuOpen ? styles.active : ""}`}>

                    <li className="nav-item">
                        <Link to="/" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/AboutUs" onClick={() => setMenuOpen(false)}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Prize" onClick={() => setMenuOpen(false)}>
                            Prize
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/JoinUs" onClick={() => setMenuOpen(false)}>
                            Join Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/QnA" onClick={() => setMenuOpen(false)}>
                            Q&A
                        </Link>
                    </li>


                    <li className={`${styles.applyButton} apply-button-container`}>                    <Link to="/JoinUs">
                        <button>지원하기</button>
                    </Link>
                </li>
                </ul>      
            </nav>
        </header>
    );
}
