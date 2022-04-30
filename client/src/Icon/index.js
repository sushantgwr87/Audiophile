import AudioLogo from "./AudiophileLogo";
import AudioName from "./AudiophileName";
import Cart from "./Cart";
import Github from "./GithubLogo";
import Linkedin from "./LinkedinLogo";
import Portfolio from "./PortfolioLogo";
import NotFound from "./NotFound";

const Icon = props => {
  switch (props.name) {
    case "AudioLogo":
      return <AudioLogo {...props} />;
    case "AudioName":
      return <AudioName {...props} />;
    case "Cart":
      return <Cart {...props} />;
    case "github":
      return <Github {...props} />;
    case "linkedin":
      return <Linkedin {...props} />;
    case "portfolio":
      return <Portfolio {...props} />;
    case "notFound":
      return <NotFound {...props} />;
    default:
      return;
  }
};

export default Icon;