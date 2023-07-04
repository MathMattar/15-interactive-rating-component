import Logo from "components/Logo";
import Form from "components/Form";
import Text from "components/Text";
import styles from "../Main.module.scss";
import Vote from "components/ConfimationVote";

export default function Main() {
  return (
    <main className={styles.main}>
      <Logo styleName="main" url="/images/icon-star.svg" />
      <Vote/>
      <Text>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </Text>
      <Form />
    </main>
  );
}
