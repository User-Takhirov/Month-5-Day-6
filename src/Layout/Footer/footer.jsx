import React from "react";
import { TopHeader } from "../../components/top-header";
import instagram from "../../assets/img/instagram.svg";
import style from "./footer.module.scss";
import uzcrad from "../../assets/img/uzcard.svg";

export const Footer = () => {
  return (
    <>
      <TopHeader />
      <div className={style.MainBlock}>
        <div className="container">
          <div className={style.block}>
            <nav>
              <h3 className={style.title}>Ижтимоий тармоқлар</h3>
              <ul className={style.list}>
                <li>
                  <a href="#">
                    <img src={instagram} alt="#" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={instagram} alt="#" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={instagram} alt="#" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={instagram} alt="#" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={instagram} alt="#" />
                  </a>
                </li>
              </ul>
            </nav>
            <nav>
              <h3 className={style.secTitlte}>Боғланиш</h3>
              <ul className={style.list}>
                <li>
                  <a className={style.link} href="tel:+998902537753">
                    +998 90 253 77 53
                  </a>
                </li>
                <li>
                  <a className={style.link} href="mailto:support@liber.uz">
                    support@liber.uz
                  </a>
                </li>
              </ul>
            </nav>
            <nav>
              <h3 className={style.title}>Биз қабул қиламиз</h3>
              <ul className={style.cardlist}>
                <li>
                  <a href="#">
                    <img src={uzcrad} alt="#" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={uzcrad} alt="#" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={uzcrad} alt="#" />
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
