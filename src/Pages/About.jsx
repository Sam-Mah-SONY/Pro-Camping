import { setTitle, activePage } from "../Hooks/setTitle&setActive.js"

import NavLinks from '../Components/NavLinks.jsx'
import styles from '../Css-module/simpleStyles.module.css'

function About() {

  setTitle("About")
  activePage("About")

  return (
    <>
        <div className={styles.body}>
            <NavLinks/>
        </div> 
    </>
  )
}

export default About