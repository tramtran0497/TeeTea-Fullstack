import { useState } from "react"
import styles from "../styles/Event.module.css"
import Image from 'next/image'

export const EventCard = ({event}) => {
    const [isShowMore, setIsShowMore] = useState(false)
    const toggleMore = () => {
         setIsShowMore(!isShowMore)
    }
  return (
    <div className={styles.eventCard} key={event.id}>
        <div className={styles.left}>
            <Image src={event.img} className={styles.img}/>
        </div>
        <div className={styles.right}>
            <h3>{event.eventName}</h3>
            <p>{event.firstWord}
                {
                    isShowMore ? <p className={styles.more}>{event.des}</p> : ""
                }
                <p className={styles.dots} id={event.id} onClick={toggleMore}> {!isShowMore ? "Read more..." : "Less more"}</p>
            </p>
        </div>
    </div>
  )
}
