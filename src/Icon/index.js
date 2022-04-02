import AudioLogo from "./AudiophileLogo";
import AudioName from "./AudiophileName";
import Cart from "./Cart";

const Icon = props => {
  switch (props.name) {
    case "AudioLogo":
      return <AudioLogo {...props} />;
    case "AudioName":
      return <AudioName {...props} />;
    case "Cart":
      return <Cart {...props} />;
    default:
      return;
  }
};

export default Icon;