import React from "react";
import style from "./home-ads.module.scss";
import storm from "../../assets/img/storm.svg";
export const HomeAds = () => {
  return (
    <>
      <ul className={style.list}>
        <li className={style.item}>
          <img src={storm} alt="#" />
          <div>
          <h3 className={style.title}>Тезкор етказиш</h3>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          </div>
        </li>
        <li className={style.item}>
          <img src={storm} alt="#" />
          <div>
          <h3 className={style.title}>Тезкор етказиш</h3>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          </div>
        </li>
        <li className={style.item}>
          <img src={storm} alt="#" />
          <div>
          <h3 className={style.title}>Тезкор етказиш</h3>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          </div>
        </li>
        <li className={style.item}>
          <img src={storm} alt="#" />
          <div>
          <h3 className={style.title}>Тезкор етказиш</h3>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          </div>
        </li>
      </ul>
    </>
  );
};
