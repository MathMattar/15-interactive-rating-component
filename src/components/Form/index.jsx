import { useState } from "react";
import optionsButtons from "./DataButtons";
import styles from "./Form.module.scss";

export default function Form() {
  const [activeButton, setActiveButton] = useState("");

  function selectOption(btn) {
    setActiveButton(btn);
  }

  function redirect(e) {
    e.preventDefault();
    window.location.href = "/finish"
    console.log("clicou");
  }

  return (
    <form className={styles.container} onSubmit={redirect}>
      <section className={styles.container__options}>
        {optionsButtons.map((btn) => (
          <button
            type="button"
            key={btn.value}
            className={activeButton === btn.value ? styles.active : ""}
            onClick={(e) => {
              e.preventDefault();
              selectOption(btn.value);
            }}
          >
            {btn.value}
          </button>
        ))}
      </section>
      <button className={styles.submit} type="submit">
        Submit
      </button>
    </form>
  );
}
