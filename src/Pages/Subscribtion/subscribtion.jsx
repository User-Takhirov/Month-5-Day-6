import React from "react";
import style from "./subscribtion.module.scss";
import bookReader from "../../assets/img/bookReader.svg";
export const Subscribtion = () => {
  return (
    <>
      <div className={style.MAinBlock}>
        <div className={style.block}>
          <h1 className={style.title}>Узингиз севган булимга обуна бўлинг</h1>
          <div>
            <img src={bookReader} alt="#" />
          </div>
        </div>
        <div className={style.susbsBlock}>
          <div className={style.left}>
            <h1 className={style.secTitle}>Обуна</h1>
            <div className={style.selectBlock}>
              <h3 className={style.selectTitle}>Обуна давом этиш вакти</h3>
              <select className={style.select}>
                <option>30 кун</option>
              </select>
            </div>
            <div className={style.selectBlock}>
              <h3 className={style.selectTitle}>Булимни танланг</h3>
              <select className={style.select}>
                <option>Фантастика</option>
              </select>
            </div>
            <h2 className={style.text}>Обуна 30 кун давом этади</h2>
          </div>
          <div className={style.right}>
            <div className={style.innerMainBlock}>
              <div className={style.innerBlock}>
                <h3 className={style.innerTitle}>Бошланиш вакти</h3>
                <p className={style.innerText}>12/09/2021</p>
              </div>
              <div className={style.innerBlock}>
                <h3 className={style.innerTitle}>Якунланиш вакти</h3>
                <p className={style.innerText}>12/10/2021</p>
              </div>
              <div className={style.innerBlock}>
                <h3 className={style.innerTitle1}>Обуна нархи</h3>
                <p className={style.innerText1}>12 000 сум</p>
              </div>
            </div>
            <div>
                <button className={style.btn}>Обуна булиш</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
