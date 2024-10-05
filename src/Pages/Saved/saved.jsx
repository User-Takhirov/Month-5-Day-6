import React from "react";
import style from "./saved.module.scss";
import miniBook from "../../assets/img/miniBook.svg";
import thought from "../../assets/img/thoughts.svg";
export const Saved = () => {
  return (
    <>
      <div className={style.MainBlock}>
        <h1 className={style.title}>Сақланганлар</h1>
        <div className={style.bookBlock}>

        <div className={style.block}>
          <img src={miniBook} alt="#" />
          <div>
            <h1 className={style.innerTitle}>Элжернга аталган гуллар</h1>
            <p className={style.innerText}>SIYOSAT, FANTASTIKA</p>
            <img src={thought} alt="#" />
            <p>
              <a className={style.link} href="#">Ўчириш</a>
            </p>
          </div>
        </div>
        <div className={style.block}>
          <img src={miniBook} alt="#" />
          <div>
            <h1 className={style.innerTitle}>Элжернга аталган гуллар</h1>
            <p className={style.innerText}>SIYOSAT, FANTASTIKA</p>
            <img src={thought} alt="#" />
            <p>
              <a className={style.link} href="#">Ўчириш</a>
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
