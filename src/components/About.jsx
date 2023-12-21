import TechStack from "./TechStack"
import styles from "../styles/About.module.css"
function About() {
  return (
    <>
      <section id="About">
        <div className={styles["about"]}>
          <h2>About Me</h2>
          <img src="../animesh.jpeg" className={styles["dp"]} alt="me" />
          <p style={{textAlign : "center"}}>HI, My name is Animesh. I from Patna, Bihar.<br></br>
            Currently, In IIT Kharagpur i am a first year undergraduate student of the department of electrical engineering entolled in its 4 year course in instrumentation engineering.
           <br></br> I am part of Tech team in student welfare group, IIT KGP. So, i like to make webpages and interested in open source things.
          </p>
          <h1 style={{paddingTop :'40px'}}>So here are some of the things i know, my TechStack</h1>
        </div>

      </section>

      <TechStack />
    </>
  )
}

export default About
