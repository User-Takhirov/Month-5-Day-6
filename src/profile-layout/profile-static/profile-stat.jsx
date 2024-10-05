import React from "react";
import sugdiyona from "../../assets/img/sugdiyona.svg";
import style from "./profile-stat.module.scss";
import { Link, Outlet } from "react-router-dom";
export const ProfileStat = () => {
  return (
    <>
      <div className={style.block}>
        <div className="container">
          <div className={style.MainBlock}>
            <div>
              <img src={sugdiyona} alt="#" />
            </div>
            <div>
              <h2 className={style.title}>Суғдиёна Икромова</h2>
              <p>
                <a className={style.link} href="tel:+998902537753">
                  +998 90 253 77 53
                </a>
              </p>
              <div className={style.innerBlock}>
                <p className={style.text}>ID: 0001 </p>
                <p className={style.text}> Баланс: 45 000 сўм</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.MainNested}>
        <div className="container">
          <div className={style.nested}>
            <div className={style.links}>
              <Link to={"/profile"} className={style.link}>
                Обуна бўлиш
              </Link>
              <Link to={"/profile/e-pay"} className={style.link}>
                Э-Хисоб
              </Link>
              <Link to={"/profile/saved"} className={style.link}>
                Сақланганлар
              </Link>
              <Link to={"/profile/settings"} className={style.link}>
                Созламалар
              </Link>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
