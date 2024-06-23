import Button from "../components/Button.jsx";
import { HiCursorClick } from "react-icons/hi";

function ButtonPage() {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <>
      <div>
        <Button primary outline rounded onClick={handleClick}>
          <HiCursorClick />
          Click Me
        </Button>
      </div>

      <div>
        <Button secondary outline rounded>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning outline rounded>
          See Deal
        </Button>
      </div>
      <div>
        <Button danger outline rounded>
          Hide Ads
        </Button>
      </div>
    </>
  );
}

export default ButtonPage;
