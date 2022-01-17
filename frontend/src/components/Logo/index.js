import { NavLink } from "react-router-dom";
import LogoMarvel from "../../assets/images/Logo.webp";
const Logo = () => {
  return (
    <NavLink exact="true" to="/">
      <div>
        <img src={LogoMarvel} alt="Marvel" width={160} height={60} />
      </div>
    </NavLink>
  );
};

export default Logo;
