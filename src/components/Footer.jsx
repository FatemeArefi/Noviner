import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img
        src="/src/assets/images/logo.svg"
        alt="logo"
        className={styles.logo}
      />

      <div className={styles["social-container"]}>
        <h4>Follow us:</h4>
        <ul className={styles["social-icons"]}>
          <li>
            <a href="#">
              <img src="/src/assets/images/tel.svg" alt="Telegram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/src/assets/images/ins.scv.svg" alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/src/assets/images/Linkdinn.svg" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/src/assets/images/sup.svg" alt="WhatsApp" />
            </a>
          </li>
        </ul>
      </div>

      {/* <div className={styles.leftSection}>
        <h4>Follow us:</h4>
        <div className={styles.socialIcons}>
          <img src="/src/assets/images/tel.svg" alt="Telegram" />
          <img src="/src/assets/images/ins.svg" alt="Instagram" />
          <img src="/src/assets/images/linkdin.svg" alt="LinkedIn" />
          <img src="/src/assets/images/sup.svg" alt="WhatsApp" />
        </div>
        <div className={styles.certifications}>
          <img
            src="https://noviner.io/assets/static/e-namad.XRx3CRzh.svg"
            alt="e-namad"
          />
          <img
            src="https://noviner.io/assets/static/e-namad-2.Cd6BX_fa.svg"
            alt="e-namad"
          />
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.email}>
            <img src="/src/assets/images/Emaill.svg" alt="Email Icon" />
            <p>info@noviner.io</p>
          </div>
          <div className={styles.phone}>
            <img src="/src/assets/images/phone.svg" alt="Phone Icon" />
            <p>021-91096782</p>
          </div>
        </div>
      </div>
      <div className={styles.rightColumns}>
        <div className={styles.column}>
          <h4>استودیو نوینر</h4>
          <ul className={styles.unstyledList}>
            <li>خانه</li>
            <li>درخواست مشاوره</li>
            <li>درباره‌ی مجموعه</li>
            <li>اطلاعات تماس</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>خدمات</h4>
          <ul className={styles.unstyledList}>
            <li>استارت آپ</li>
            <li>خدمات دوآپس</li>
            <li>طراحی وب سایت</li>
            <li>موبایل اپلیکیشن</li>
            <li>طراحی UI&UX</li>
            <li>دیجیتال مارکتینگ</li>
            <li>سئو SEO</li>
            <li>سوشیال مدیا</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>محصولات</h4>
          <ul className={styles.unstyledList}>
            <li>سایت شخصی</li>
            <li>سایت شرکتی</li>
            <li>سایت خدماتی</li>
            <li>فروشگاه آنلاین</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>تماس با ما</h4>
          <ul className={styles.unstyledList}>
            <li>ایمیل: info@noviner.io</li>
            <li>تلفن: 021-91096782</li>
          </ul>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
