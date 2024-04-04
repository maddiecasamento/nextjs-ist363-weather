import { useState } from "react";

import ButtonUI from "./ButtonUI"
import Image from "next/image";

import styles from "./PeoplePicker.module.scss";

const PeoplePicker = ({ people }) => {
   
    const [activePersonindex, setActivePersonindex] = useState(0);
   
    return (
        <section>
        <h2>Team</h2>
        <div className={styles.card__container}>
            <ButtonUI 
            className={styles.card__arrow__left}
            icon="faAngleLeft" 
                clickHandler={() => {
                const newIndex = 
                activePersonindex <= 0
                ? people.length -1
                : activePersonindex - 1;
                setActivePersonindex(newIndex);
            }}
            />
            <ButtonUI 
            className={styles.card__arrow__right}
            icon="faAngleRight"
                clickHandler={() => {
                const newIndex = 
                activePersonindex >= people.length -1
                ? 0
                : activePersonindex + 1;
                setActivePersonindex(newIndex);
            }}
            />
        <div className={styles.card}>
            <Image 
                src={`/headshots/${people[activePersonindex].slug}.jpg`}
                alt={`${people[activePersonindex].name.first}${" "}
                ${people[activePersonindex].name.last}`}
                width={200}
                height={200}
                className={styles.card__headshot}
            />
            <h3 classname={styles.card__name}>
                {people[activePersonindex].name.first}{" "}
                {people[activePersonindex].name.last}
            </h3>
            <h4 classname={styles.card__job}>
                <em>{people[activePersonindex].jobTitle}</em>
                <br />
                {people[activePersonindex].company}
            </h4>
        </div>
        </div>
    </section>
    );
};
export default PeoplePicker;