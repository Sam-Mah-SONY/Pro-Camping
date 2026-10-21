import HeaderLayout from './HeaderLayout.jsx'
import FooterLayout from './FooterLayout.jsx'
import NavLinks from '../Components/NavLinks.jsx'

import { Outlet } from 'react-router-dom'

import styles from "../Css-module/header.module.css"


function Layout() {

    const pageName = window.location.pathname;
    
    
    return (
        <div >
            <header className={styles.header}>
                <HeaderLayout >
                    <NavLinks />
                </HeaderLayout>            
            </header>
            <main>
              
            </main>
            <footer>
              <FooterLayout />
            </footer>
        </div>
    )
}

export default Layout