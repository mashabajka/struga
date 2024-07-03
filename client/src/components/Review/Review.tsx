import React from 'react'
import styles from './Review.module.css'
// import avatar from '../../assets/Slide3/avatar.png'
import star from '../../assets/Slide3/Star.png'

type Props={
    stars: number;
    text: string;
    name: string;
    position: string;
    avatar: string;
}

export default function Review({stars, text, name, position, avatar}:Props): JSX.Element {
    
    function createStars(count:number, star:string) {
        const starElements = [];
        for (let i = 0; i < count; i++) {
            starElements.push(<img src={star} key={i} />);
        }
        return starElements;
    }

    return (
                <div className={styles.review}>
                    <div className={styles.stars}> 
                    {createStars(stars, star)}
                    </div>
                    <p className={styles.text}>{text}</p>
                    <div className={styles.author}>
                        <img src={avatar} className={styles.avatar}/>
                        <div className={styles.aboutAuthor}>
                        <span className={styles.name}>{name}</span>
                        <span className={styles.position}>{position}</span>
                        </div>

                    </div>
                </div>
            
    )
}
