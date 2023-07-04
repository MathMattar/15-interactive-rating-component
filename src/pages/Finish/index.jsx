import React from "react";
import Text from "components/Text";
import Logo from "components/Logo";
import styles from "../Main.module.scss";
import Vote from "components/ConfimationVote";

export default function Finish() {
  return (
    <main className={styles.main}>
      <Logo styleName="finish" url="/images/illustration-thank-you.svg" />
      <Vote />
      <Text>
        <h1 style={{ textAlign: `center` }}>Thank You!</h1>
        <p style={{ textAlign: `center` }}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </Text>
    </main>
  );
}
