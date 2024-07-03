import React from "react";
import styles from "./Slide3.module.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import img_block1_1 from "../../assets/Slide3/block1_1.png";
import img_block1_2 from "../../assets/Slide3/block1_2.png";
import left from "../../assets/Slide3/Left.png";
import right from "../../assets/Slide3/Right.png";
import logo1 from "../../assets/Slide3/logo1.png";
import logo2 from "../../assets/Slide3/logo2.png";
import logo3 from "../../assets/Slide3/logo3.png";
import logo4 from "../../assets/Slide3/logo4.png";
import logo5 from "../../assets/Slide3/logo5.png";
import avatar from "../../assets/Slide3/avatar.png";
import star from "../../assets/Slide3/Star.png";
import Review from "../../components/Review/Review";
import { reviews } from "../../Reviews";

export default function Slide3() {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.mainDiv}>
          <span className={styles.header} id="about">
            О нашей мастерской
          </span>
          <div className={styles.blockOne}>
            <div className={styles.text}>
              <p className={styles.description1}>
                Struga — творческая столярная мастерская, ручное производство
                деревянной посуды и кухонной утвари, предметов декора, элементов
                интерьера и мебели, подарков, сувениров. Для дома и бизнеса.
                Наши изделия изготовлены из отборной, хорошо высушенной
                древесины твердых пород, тщательно отшлифованы и пропитаны
                натуральными маслами. Мы любим дерево, для нас важны детали,
                ценим профессиональный подход, не экономим на материалах и
                инструментах, поэтому гарантируем долговечность произведений
                мастерской.
              </p>
              <p className={styles.description2}>
                История мастерской Struga началась в 2010 году с хобби —
                изготовление оригинальных фоторамок из состаренных сосновых
                дощечек на подарки для друзей. Начиная с 2015 столярная
                мастерская уже становится основным занятием, приносящим
                заработок. В процессе работы и творчества осваивались новые
                технологии, приемы и инструменты.   Пробовали изготавливать
                разделочные доски, тарелки, шкатулки, светильники. Со временем
                мастерская Struga обзавелась своим помещением и серьезным
                арсеналом станков и инструментов, преобразовалась во вполне
                удачный коммерческий проект с интересными работами. 
              </p>
            </div>
            <div className={styles.images}>
              <img className={styles.img1} src={img_block1_1} />
              <img className={styles.img2} src={img_block1_2} />
            </div>
          </div>
          <div className={styles.blockTwo}>
            <span className={styles.header}>Наши клиенты</span>
            <div className={styles.logos}>
              <img src={left} className={styles.left} />
              <img src={logo1} className={styles.logo1} />
              <img src={logo2} className={styles.logo2} />
              <img src={logo3} className={styles.logo3} />
              <img src={logo4} className={styles.logo4} />
              <img src={logo5} className={styles.logo5} />
              <img src={right} className={styles.right} />
            </div>
          </div>
          <div className={styles.blockThree}>
            <span className={styles.header} id="reviews">
              Отзывы
            </span>
            <div className={styles.reviews}>
              <img src={left} className={styles.left} />

              {reviews.map((review, i) => (
                <Review
                  key={i}
                  stars={review.stars}
                  text={review.text}
                  name={review.name}
                  position={review.position}
                  avatar={review.avatar}
                />
              ))}
              <img src={right} className={styles.right} />
            </div>
            <button type="button" className={styles.btnReview}>ПЕРЕЙТИ В КАТАЛОГ</button>

          </div>
        </div>
      </Wrapper>
    </div>
  );
}
