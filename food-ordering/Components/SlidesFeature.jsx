import styles from "../styles/SlidesFeature.module.css";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import Image from "next/image";
import { useState } from "react";
import {listSlides} from "../fakeData/SlidesData.js"

export const SlidesFeature = () => {
    const [index, setIndex] = useState(0);

    const handleSlides = (direction) => {
        const lastIndexSlide = listSlides.length - 1;

        if(direction === "left"){
            setIndex(index !== 0 ? index - 1 : lastIndexSlide);
        } else{
            setIndex(index !== lastIndexSlide ? index + 1 : 0);
        }
    };

  return (
    <div className={styles.container}>
        <BiChevronsLeft className={styles.icon} style={{"left": "20px"}} onClick={() => handleSlides("left")}/>
        <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
             {listSlides.map((slide, index) => 
                (   
                    <div className={styles.imgWrapper} key={slide.title}>
                        <div className={styles.info}>
                            <h2>{slide.title}</h2>
                            <subtitle>{slide.subtitle}</subtitle>
                        </div>
                        <Image src={slide.img} alt={slide.title} className={styles.img} key={index} />
                    </div>
                ))}
        </div>
        <BiChevronsRight className={styles.icon} style={{"right": "20px"}} onClick={() => handleSlides("right")}/>
    </div>
  )
};
