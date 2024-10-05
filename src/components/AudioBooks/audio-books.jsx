import React from "react";
import style from "./audio-books.module.scss";
export const AudioBooks = ({ id, title, text, img, listening, rating }) => {
  return (
    <>
        <div className={style.block} id={id}>
          <img src={img} alt="#" />
          <h3 className={style.title}>{title}</h3>
          <p className={style.text}>{text}</p>
          <div className={style.innerflex}>
            <img className={style.imgs} src={rating} alt="#" />
            <img className={style.imgs} src={listening} alt="#" />
          </div>
        </div>
    </>
  );
};
