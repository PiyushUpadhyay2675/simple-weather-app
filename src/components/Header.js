import { FaPooStorm } from "react-icons/fa";
const Header = () => {
  return (
    <header>
      <h2>WeathAPI</h2>
      <FaPooStorm size={160} id="icon" />
      <p>A minimal approach to knowing your location's weather</p>
    </header>
  );
};

export default Header;
