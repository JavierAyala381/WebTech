// Bring all the syles from presentation.module.css
import styles from './PresentationCard.module.css';
import { IoPersonOutline } from "react-icons/io5";

// We want to create a presentation card
//!WARNING: Remember the name of the component has to be the same as the file name
export function PresentationCard({
    name,
    email,
    description
}) {
    // This is js ...

    
    //NOTE! Everything under id HTML, everything between "(...HTML)"
    return (
        <div 
            // this is how we use our styles :)
            className={styles["presentation-container"]}
        >
            <h1>{name}</h1>
            <IoPersonOutline
            className={styles["icon"]}
            >
            </IoPersonOutline>
            <p
            className={styles["description"]}
            >{description}</p>
            <span>{email}</span>
        </div>
    )
}