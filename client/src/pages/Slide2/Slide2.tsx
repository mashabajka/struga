import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from "./Slide2.module.css";
import furniture from "../../assets/catalog/furniture.png";
import boards from "../../assets/catalog/boards.png";
import boards2 from "../../assets/catalog/boards2.png";
import nuts from "../../assets/catalog/nuts.png";
import clocks from "../../assets/catalog/clocks.png";
import plates from "../../assets/catalog/plates.png";
import special from "../../assets/catalog/special.png";

export default function Slide2() {
  return (
    <>
      <Wrapper>
        <div className={styles.mainDiv} id="catalog">
          <h1 className={styles.h1}>Каталог</h1>
          <div className={styles.text}>
            <span className={styles.description}>
              Мы любим дерево, для нас важны детали, ценим профессиональный
              подход. Наши изделия изготовлены из отборной
            </span>
            <span className={styles.description}>
              древесины и обработаны натуральными материалами. Мы гарантируем
              долговечность произведений мастерской.
            </span>
          </div>

          <div className={styles.row1}>
            <div className={styles.furniture}>
              <img className={styles.imgFurniture} src={furniture} />
              <div className={styles.imgFurnitureOverlay}></div>
              <div className={styles.textCard}>
                <span className={styles.header1}>МЕБЕЛЬ</span>
                <span className={styles.header2}>И ИНТЕРЬЕР</span>
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.boards}>
                <div className={styles.board_card}>
                  <img src={boards} className={styles.img_card} />
                  <div className={styles.imgCardOverlay}></div>
                  <div className={styles.textCard}>
                    <span className={styles.header1}>ДОСКИ</span>
                    <span className={styles.header2}>СЕРВИРОВОЧНЫЕ</span>
                  </div>
                </div>
                <div className={styles.board_card}>
                  <img src={boards2} className={styles.img_card} />
                  <div className={styles.imgCardOverlay}></div>
                  <div className={styles.textCard}>
                    <span className={styles.header1}>ДОСКИ</span>
                    <span className={styles.header2}>РАЗДЕЛОЧНЫЕ</span>
                  </div>
                </div>
              </div>
              <div className={styles.stand}>
                <div className={styles.board_card}>
                  <img src={nuts} className={styles.img_card} />
                  <div className={styles.imgCardOverlay}></div>
                  <div className={styles.textCard}>
                    <span className={styles.header1}>МЕНАЖНИЦЫ</span>
                    <span className={styles.header2}>ОРЕШНИЦЫ</span>
                  </div>
                </div>
                <div className={styles.board_card}>
                  <img src={clocks} className={styles.img_card} />
                  <div className={styles.imgCardOverlay}></div>
                  <div className={styles.textCard}>
                    <span className={styles.header1}>ПОДСТАВКИ</span>
                    <span className={styles.header2}>ДЛЯ ЧАСОВ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row2}>
            <div className={styles.plates_card}>
              <img src={plates} className={styles.img_card_plates} />
              <div className={styles.imgCardOverlay}></div>
              <div className={styles.textCard}>
                <span className={styles.header1}>ТАРЕЛКИ</span>
                <span className={styles.header2}>И БЛЮДА</span>
              </div>
            </div>
            <div className={styles.special_card}>
              <img src={special} className={styles.img_card_special} />
              <div className={styles.imgCardOverlay}></div>
              <div className={styles.textCard}>
                <span className={styles.header1}>ИНДИВИДУАЛЬНЫЕ</span>
                <span className={styles.header2}>ИЗДЕЛИЯ ДЛЯ РЕСТОРАНОВ</span>
              </div>
            </div>
          </div>
          <button type="button" className={styles.btnCatalog}>ПЕРЕЙТИ В КАТАЛОГ</button>
        </div>
      </Wrapper>
    </>
  );
}
