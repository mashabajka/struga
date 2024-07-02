import React from "react";
import styles from "./Slide3.module.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import img_block1_1 from '../../assets/Slide3/block1_1.png'
import img_block1_2 from '../../assets/Slide3/block1_2.png'


export default function Slide3() {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.mainDiv}>
          <span className={styles.header}>О нашей мастерской</span>
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
                <img className={styles.img1} src={img_block1_1}/>
                <img className={styles.img2} src={img_block1_2}/>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
