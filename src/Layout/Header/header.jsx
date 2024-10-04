import React from "react";
import style from "./header.module.scss";
import icon from "../../assets/img/icon.svg";
import cube from "../../assets/img/cube.svg";
import { ProfileHeader } from "../../components/profile-header";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <div className="container">
        <div className={style.HeaderBlock}>
          <div className="container">
            <div className={style.mainBlock}>
              <div>
                <img src={icon} alt="#" />
              </div>
              <div className={style.block}>
                <div className={style.selectBlock}>
                  <img src={cube} alt="#" />
                  <select className={style.select}>
                    <option>Рукнлар</option>
                  </select>
                </div>
                <div className={style.inputBlock}>
                  <input
                    className={style.input}
                    type="text"
                    placeholder="Қидириш"
                  />
                </div>
              </div>
            </div>
          </div>
          <ProfileHeader />
        </div>
      </div>
      <Link to={"/"}>Home</Link>
      <Link to={"/books"}>Books</Link>

    </>
  );
};
