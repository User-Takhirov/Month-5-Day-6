import React from "react";
import style from "./home.module.scss";
import { Books, Rukun } from "../../Data/data";
import { Rukunlar } from "../../components/rukunlar";
import { HomeAds } from "../../components/homeAds";
import { BookSection } from "../../components/BookSection";
import { AudioBooks } from "../../components/AudioBooks";
import slider from "../../assets/img/slider.svg";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <div className={style.MainBlock}>
        <div className="container">
          <div className={style.block}>
            <HomeAds />
            <div className={style.rukunlarBlock}>
              <h2 className={style.rukunTitle}>Рукнлар</h2>
              <div className={style.rukunlar}>
                {Rukun.map((item) => (
                  <Rukunlar key={item.id} title={item.title} img={item.img} />
                ))}
              </div>
            </div>
            <div className="container">
              <h2 className={style.Booktitle}>Янги қўшилганлар</h2>
              <div className={style.BookSection}>
                {Books.slice(0, 5).map((item) => (
                  <Link to={`/home/detail/${item.id}`} key={item.id}>
                    <BookSection
                      // key={item.id}
                      img={item.img}
                      id={item.id}
                      title={item.title}
                      text={item.text}
                      rating={item.rating}
                      listening={item.listening}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="container">
              <div className={style.audioTitleBlock}>
                <h2 className={style.audotitle}>Аудио китоблар</h2>
                <img className={style.slider} src={slider} alt="#" />
              </div>
              <div className={style.AudioBooks}>
                {Books.slice(5, 10).map((item) => (
                  <Link to={`/home/detail/${item.id}`} key={item.id}>
                    <AudioBooks
                      key={item.id}
                      img={item.img}
                      id={item.id}
                      title={item.title}
                      text={item.text}
                      rating={item.rating}
                      listening={item.listening}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
