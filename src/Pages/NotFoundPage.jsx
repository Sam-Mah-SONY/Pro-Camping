import NavLinks from '../Components/NavLinks.jsx'
import styles from '../Css-module/simpleStyles.module.css'
import { setTitle } from "../Hooks/setTitle&setActive.js"


function NotFoundPage() {

    setTitle("404 Error")


  return (
    <>
        <div className={styles.body}>
            <NavLinks />
            <div className="errorMessageWrapper">
                <h1 className='errorCode'>404</h1>
                <h2 className='notFoundMess'>Not Found</h2>
            </div>
        </div>
        <style>
            {`
                .errorMessageWrapper{
                    display: flex;
                    flex-direction: column;
                    width: 35%;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 13rem;
                    color: white;
                    background: transparent;
                    backdrop-filter: blur(9px);
                    box-shadow: 0 5px 15px rgba(239, 111, 81, 1);
                    border-bottom: 1px solid var(--white);
                    border-right: 1px solid var(--white);
                    border-left: 1px solid var(--white);
                    border-radius: 10px;
                }
                .errorCode{
                    font-size: 150px;
                }
                .notFoundMess{
                    font-size: 75px
                }
            `}
        </style>
    </>
    
  )
}

export default NotFoundPage 