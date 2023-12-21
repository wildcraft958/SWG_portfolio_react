import { slide as Menu } from 'react-burger-menu';
import "../styles/SideBar.css"


function SideBar() {
    return (
        <div className='main-container'>
            <Menu>
                <a className="menu-item" href="/Introduction">
                    Introduction
                </a>
                <a className="menu-item" href="/Portfolio">
                    Portfolio
                </a>
                <a className="menu-item" href="/About">
                    About
                </a>
                <a className="menu-item" href="/Contact">
                    Contact
                </a>
            </Menu>
        </div>
    )
}

export default SideBar
