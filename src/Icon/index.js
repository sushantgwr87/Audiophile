import AudioLogo from "./AudiophileLogo";
import AudioName from "./AudiophileName";

const Icon = props => {
  switch (props.name) {
    case "AudioLogo":
      return <AudioLogo {...props} />;
    case "AudioName":
      return <AudioName {...props} />;
    default:
      return;
  }
};

export default Icon;