import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="text-section">
        <div className="banner-text">
          <h2>
            نوینر، دنیای دیجیتال شما را <span>خلق</span> میکند.
          </h2>
          <h3>Noviner creates your digital world</h3>
          <p>
            ارائه کننده راه حل‌های نوآورانه و کارآمد برای چالش‌های تکنولوژی شما
            :) از ایده تا اجرا، کنار شما در مسیر تحول دیجیتال و مارکتینگ شما
            خواهیم بود تا رویای خود را به واقعیت تبدیل کنید و به دنیای تکنولوژی
            بدون چالش قدم بگذارید!
          </p>
        </div>

        <div className="banner-button">
          <div className="call">
            <a href="#">اطلاعات تماس</a>
          </div>
          <div className="register">
            <a href="#">درخواست مشاوره</a>
          </div>
        </div>
      </div>
      <div className="banner-image">
        <img src="/src/assets/images/Hoome.svg" alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
