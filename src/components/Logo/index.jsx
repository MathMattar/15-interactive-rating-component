import styles from "./Logo.module.scss";

export default function Logo({ styleName, url }) {
  return (
    <div
      className={styles[styleName]}
      style={{ backgroundImage: `url(${url})` }}
    ></div>
  );
}
