import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url('/images/icon-star.svg')` }}
    ></div>
  );
}
