import React from "react";
import style from "./rukunlar.module.scss";
export const Rukunlar = ({ title, img }) => {
  return (
    <>
      <div className={style.block}>
        <div className={style.imgBlock}>
          <img src={img} alt="#" />
        </div>
        <h3 className={style.title}>{title}</h3>
      </div>
    </>
  );
};
