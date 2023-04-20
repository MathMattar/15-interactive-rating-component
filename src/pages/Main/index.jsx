import Logo from "components/Logo";
import Form from "components/Form";
import Text from "components/Text";
import "./Main.module.scss";

export default function Main() {
  return (
    <main>
      <Logo />
      <Text>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </Text>
      <Form 
        url="./finish"
      />
    </main>
  );
}
