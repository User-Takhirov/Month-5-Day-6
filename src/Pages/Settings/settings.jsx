import React from "react";
import style from "./settings.module.scss";
import profile from "../../assets/img/profileSettings.svg";
export const Settings = () => {
  return (
    <>
      <div className={style.MainBlock}>
        <h1 className={style.title}>Созламалар</h1>
        <div className={style.imgBlock}>
          <img src={profile} alt="#" />
          <h3>
            <a className={style.link} href="#">
              Сурат юклаш
            </a>
          </h3>
        </div>
        <form>
          <div className={style.labelB} >
            <p className={style.label}>Исмингиз</p>
            <input
              className={style.input}
              type="text"
              
              placeholder="Исмингиз"
            />
          </div>
          <div>
            <button type="submit" className={style.btn}>Сақлаш</button>
          </div>
        </form>
      </div>
    </>
  );
};
