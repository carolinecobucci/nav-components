import Button from "../components/Button";
import { GoBell } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary>
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button secondary>Buy Now!</Button>
      </div>
      <div>
        <Button danger>Hide Ads</Button>
      </div>
      <div>
        <Button warning>Hi!</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
