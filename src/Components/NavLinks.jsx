import { Link } from 'react-router-dom'

import IranCampingLogo from '../icons/iran-camping-logo.png'
import styles from '../Css-module/navLinks.module.css'



function NavLinks() {

    // activePage ? 

    return (
        <>
            <section className={`${styles.headerSection} ${styles.flex}`}>
                <div className={styles.container}>
                    <nav className={`${styles.nav} ${styles.flex}`}>
                        <div className={styles.flex}>
                            <div className={styles.appLogo}>
                                <img src={IranCampingLogo} alt="Camping-Web" className={styles.appLogoImg} />
                            </div>
                            <ul className={`${styles.menu} ${styles.flex}`}>
                                <li className={`${styles.menuItems}`}>
                                    <Link to='/' className={styles.menuLink}>Home</Link>
                                </li>
                                <li className={styles.menuItems}>
                                    <Link to="/Destinations" className={styles.menuLink}>Destinatons</Link>
                                </li>
                                <li className={styles.menuItems}>
                                    <Link to="/Blogs" className={styles.menuLink}>Blogs</Link>
                                </li>
                                <li className={styles.menuItems}>
                                    <Link to="/About" className={styles.menuLink}>About</Link>
                                </li>
                                <li className={styles.menuItems}>
                                    <Link to="/Contact-Us" className={styles.menuLink}>Contact Us</Link>
                                </li>
                            </ul>
                        </div>          
                        <div className={styles.headerLink}>
                            <Link to="/Sign-Up" className={styles.headerLink}>Sign up</Link>
                            <Link to="/Sign-In" className={`${styles.headerLink} ${styles.headerLinkBorder}`} >Sign in</Link>
                        </div>
                        {/* <div class="flex nav__btn">
                            <span class="nav__btn-line"></span>
                        </div> */}
                    </nav>
                </div>
            </section>
        </>
    )
}

export default NavLinks