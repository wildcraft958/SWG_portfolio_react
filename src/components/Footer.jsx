import logo from "../assets/dp.jpg"
import styles from '../styles/Footer.module.css'
import { SocialIcon } from 'react-social-icons'


function Footer() {
    return (
        <>
            <hr className={styles["line"]} />
            <footer>
                <img src={logo} alt="logo" className={styles["img"]} />
                {/* <strong>hi</strong> */}
                <div className={styles["social-links"]}>
                    <ul>
                        <li><SocialIcon url="https://facebook.com" /></li>
                        <li><SocialIcon url="https://github.com" /></li>
                        <li><SocialIcon url="https://instagram.com" /></li>
                        <li><SocialIcon url="https://linkedin.com" /></li>

                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
