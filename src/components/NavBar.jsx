import logo from "../assets/dp.jpg"
import styles from "../styles/NavBar.module.css"
import { HashLink as Link } from 'react-router-hash-link'




function NavBar() {
    const linkStyle = {
        textDecoration: "none"
    }
    return (
        <>

            <nav className={styles.nav}>
                <Link smooth to="#home">
                    <img src={logo} className={styles["img"]}></img>
                </Link>
                <ul className={styles["nav-list"]}>
                    <li><Link smooth to="#Introduction" style={linkStyle}>Introduction</Link></li>
                    <li><Link smooth to="#Portfolio" style={linkStyle}>Portfolio</Link></li>
                    <li><Link smooth to="#About" style={linkStyle}>About Me</Link></li>
                    <li><Link smooth to="#Contact" style={linkStyle}>Contact</Link></li>


                </ul>
            </nav>
            <hr className={styles["line"]} />

        </>

    )
}

export default NavBar
