import React from "react";
import style from "./e-pay.module.scss";
import wallet from "../../assets/img/wallet.svg";
import payme from "../../assets/img/payme.svg";
// import wallet from "../../assets/img/wallet.svg";
import click from "../../assets/img/click.svg";
export const EPay = () => {
  return (
    <>
      <div className={style.MainBlock}>
        <h1 className={style.title}>Э-Хисоб</h1>
        <div>
          <div className={style.block}>
            <div>
              <p className={style.balance}>Баланс</p>
              <p className={style.price}>45 000 сўм</p>
            </div>
            <img src={wallet} alt="#" />
          </div>
          <div>
            <button className={style.btns}>
              <img src={payme} alt="#" />
            </button>
          </div>
          <div>
            <button className={style.btns}>
              <img src={click} alt="#" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
