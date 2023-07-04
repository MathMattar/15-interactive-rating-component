import styles from "./Vote.module.scss";

export default function Vote({ activeButton }) {
  return (
    <div className={styles.background}>
      <p>You selected {`${activeButton}`} out of 5</p>
    </div>
  );
}
