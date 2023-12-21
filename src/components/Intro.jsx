import styles from "../styles/Intro.module.css"
function Intro() {
    return (
        <div id='Introduction' className={styles["intro"]}>
            <h2>Welcome to My Portfolio Website</h2>
            <p>
                I am delighted to have you here, and I appreciate your interest in exploring my body of work.<br/>
                This platform serves as a showcase of my skills, creativity, and dedication to my craft.<br/>
                Please feel free to navigate through the various projects and experiences I have had the privilege to be a part of.<br/>
                Thank you for taking the time to get to know me better through my work.
            </p>
        </div>
    )
}

export default Intro
