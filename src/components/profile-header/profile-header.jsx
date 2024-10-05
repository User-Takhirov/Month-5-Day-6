import React from "react";
import style from "./profile-header.module.scss";
import uz from "../../assets/img/uz.svg";
import profile from "../../assets/img/profile.svg";
import { NavLink } from "react-router-dom";
export const ProfileHeader = () => {
  return (
    <>
      <div className={style.proMain}>
        <div className={style.langBlock}>
          <img src={uz} alt="#" />
          <select className={style.lang}>
            <option>Ўз</option>
          </select>
        </div>
        <div className={style.profBlock}>
          <img src={profile} alt="#" />
          <NavLink to={"/profile"} className={style.profile} href="#">
            Profile
          </NavLink>
        </div>
      </div>
    </>
  );
};
