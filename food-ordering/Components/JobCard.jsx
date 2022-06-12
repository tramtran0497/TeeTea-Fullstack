import Image from "./Image";
import styles from "../styles/Career.module.css"

export const JobCard = ({position}) => {
  return (
        <div className={styles.card} key={position.jobName}>
            <div className={styles.imgWrapper}>
                <Image src={position.img}/>
            </div>
            <h2>{position.jobName}</h2>
            <ul>
                {position.reqs.map((req,index) =>(
                    <li key={index}>{req}</li>
                ))}
            </ul>
            <p>We need: {position.qty} member(s)</p>
        </div>
    )
}
