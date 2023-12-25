import { slide as Menu } from 'react-burger-menu';
import "../styles/SideBar.css"
import { HashLink as Link } from "react-router-hash-link"


function SideBar() {
    return (
        <div className='main-container'>
            <Menu>
                <Link className="menu-item" smooth to="#Introduction">
                    Introduction
                </Link>
                <Link className="menu-item" smooth to="#Portfolio">
                    Portfolio
                </Link>
                <Link className="menu-item" smooth to="#About">
                    About
                </Link>
                <Link className="menu-item" smooth to="#Contact">
                    Contact
                </Link>
            </Menu>
        </div>
    )
}

export default SideBar
