import styles from "../Css-module/header.module.css"

function HeaderLayout({children}) {

  
  return (
    <header>
        <div className={styles.container}>
            {children}
        </div>
    </header>
  )
}

export default HeaderLayout