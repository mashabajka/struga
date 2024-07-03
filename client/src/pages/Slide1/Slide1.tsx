import styles from "./Slide1.module.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import Navbar from "../../components/Navbar/Navbar";
import btnToVideo from "../../assets/images/btnYoutube.png";
import Button from "../../components/Button/Button";

export default function Slide1() {
  const handleOnClick = () => {
    const catalogAnchor = document.getElementById("catalog");
    if (catalogAnchor) {
      catalogAnchor.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={styles.background}>
        <Wrapper>
          <div className={styles.mainDiv}>
            <Navbar />
            <div className={styles.description}>
              <div className={styles.first}>
                <div className={styles.header}>
                  <span>Изделия из дерева на заказ</span>
                  <span> с доставкой по России</span>
                </div>
                <div className={styles.underHeader}>
                  <span>Cтиль и уют деревянных аксессуаров</span>
                  <span> в ваш дом, ресторан или кафе</span>
                </div>
                <Button
                  text="ПЕРЕЙТИ В КАТАЛОГ"
                  onClick={handleOnClick}
                  align="flex-start"
                />
              </div>
              <div className={styles.second}>
                <img className={styles.btnYoutube} src={btnToVideo} />
              </div>
            </div>
            <div className={styles.stats}>
              <div className={styles.stats1}>
                <span className={styles.bold}>14</span>
                <span className={styles.notBold}>ЛЕТ</span>
                <span className={styles.notBold}>ОПЫТА</span>
              </div>
              <div className={styles.stats1}>
                <span className={styles.bold}>12 000</span>
                <span className={styles.notBold}>ИЗДЕЛИЙ</span>
                <span className={styles.notBold}>ИЗГОТОВЛЕНО</span>
              </div>
              <div className={styles.stats1}>
                <span className={styles.bold}>700+</span>
                <span className={styles.notBold}>ДОВОЛЬНЫХ</span>
                <span className={styles.notBold}>КЛИЕНТОВ</span>
              </div>
              <div className={styles.stats1}>
                <span className={styles.bold}>4.95</span>
                <span className={styles.notBold}>СРЕДНИЙ</span>
                <span className={styles.notBold}>РЕЙТИНГ ЗАКАЗОВ</span>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
