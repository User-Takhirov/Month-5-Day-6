import React from "react";
import style from "./book-section.module.scss";
import { Link } from "react-router-dom";
export const BookSection = ({ title, id, text, img, listening, rating }) => {
  return (
    <>
      <div key={id} className={style.block}>
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
