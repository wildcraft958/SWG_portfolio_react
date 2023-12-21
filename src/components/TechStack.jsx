import styles from "../styles/TechStack.module.css"
import tech1 from "../assets/tech1.png"
import tech2 from "../assets/bootstrap-logo.png"
import tech3 from "../assets/tailwind.png"
import tech4 from "../assets/tech2.png"


function TechStack() {
  return (
    <div className={styles["main"]}>

      <div ><img src={tech1} alt="Technology 1" className={styles["tech-item1"]}/></div>

      <div><img src={tech2} alt="Technology 2" className={styles["tech-item2"]}></img><img src={tech3} alt="Technology 3" className={styles["tech-item2"]} /></div>

      <div ><img src={tech4} alt="Technology 3" className={styles["tech-item3"]}/></div>
    </div>
   
  )
}

export default TechStack
