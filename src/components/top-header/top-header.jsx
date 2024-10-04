import React from "react";
import style from "./top-header.module.scss";
import playmarket from "../../assets/img/playmarket.svg";
import appstore from "../../assets/img/appStore.svg";
export const TopHeader = () => {
  return (
    <>
      <div className={style.MainBlock}>
        <div className="container">
          <div className={style.block}>
            <nav>
              <h3 className={style.title}>Платформа хақида</h3>
              <ul>
                <li>
                  <a className={style.link} href="#">
                    Liber ўзи нима?
                  </a>
                </li>
                <li>
                  <a className={style.link} href="#">
                    Фойдаланиш шартлари
                  </a>
                </li>
                <li>
                  <a className={style.link} href="#">
                    Ёрдам
                  </a>
                </li>
              </ul>
            </nav>
            <nav>
              <h3 className={style.title}>Обуна хақида</h3>
              <ul>
                <li>
                  <a className={style.link} href="#">
                    Обуна бўлиш
                  </a>
                </li>
                <li>
                  <a className={style.link} href="#">
                    Қандай тўлаш
                  </a>
                </li>
              </ul>
            </nav>
            <nav>
              <h3 className={style.title}>Китоблар</h3>
              <ul>
                <li>
                  <a className={style.link} href="#">
                    Аудио китоблар
                  </a>
                </li>
                <li>
                  <a className={style.link} href="#">
                    Электрон китоблар
                  </a>
                </li>
                <li>
                  <a className={style.link} href="#">
                    Китоблар
                  </a>
                </li>
              </ul>
            </nav>
            <nav>
              <h3 className={style.title}>Мобил илова</h3>
              <ul>
                <li>
                  <a className={style.link} href="#">
                    <img src={appstore} alt="#" />
                  </a>
                </li>
                <li>
                  <a className={style.link} href="#">
                    <img src={playmarket} alt="#" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
