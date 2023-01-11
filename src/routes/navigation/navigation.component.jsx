import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => (
  <>
    <div className="navigation">
      <Link className="logo-container" to="/">
        <div>
          <CrownLogo className="logo" />
        </div>
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        <Link className="nav-link" to="/sign-in">
          sign in
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);

export default Navigation;
