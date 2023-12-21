import logo from "../assets/dp.jpg"
import styles from "../styles/NavBar.module.css"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from './About'
import Contact from './Contact'
import Introduction from './Intro'
import Portfolio from "./Portfolio"
import Home from "../App"




function NavBar() {
    const linkStyle = {
        textDecoration: "none"
    }
    return (
        <Router>

            <nav className={styles.nav}>
                <Link to="/">
                    <img src={logo} className={styles["img"]}></img>
                </Link>
                <ul className={styles["nav-list"]}>
                    <li><Link to="/Introduction" style={linkStyle}>Introduction</Link></li>
                    <li><Link to="/Portfolio" style={linkStyle}>Portfolio</Link></li>
                    <li><Link to="/About Me" style={linkStyle}>About Me</Link></li>
                    <li><Link to="/Contact" style={linkStyle}>Contact</Link></li>
                    <Routes>
                    <Route path="/" exact component={Home} />
                    <Route path="/Introduction" component={Introduction} />
                    <Route path="/Portfolio" component={Portfolio} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    </Routes>

                </ul>
            </nav>
            <hr className={styles["line"]} />

        </Router>

    )
}

export default NavBar
