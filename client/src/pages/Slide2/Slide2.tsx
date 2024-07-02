import React from 'react'
import Wrapper from '../../components/Wrapper/Wrapper'
import styles from './Slide2.module.css'

export default function Slide2() {
    

    return (
        <>
            <Wrapper>
                <div className={styles.mainDiv}>
                    <h1 className={styles.h1}>Каталог</h1>
                    <span className={styles.description}>Мы любим дерево, для нас важны детали, ценим профессиональный подход. Наши изделия изготовлены из отборной</span>
                    <span className={styles.description}>древесины и обработаны натуральными материалами. Мы гарантируем долговечность произведений мастерской.</span>


                </div>
            </Wrapper>
        </>
    )
}
