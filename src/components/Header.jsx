import logo from "../assets/img/logo.svg";
import moon from "../assets/img/moon.svg";
import menu from "../assets/img/menu.svg";
const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <p>NFT SPACE</p>
        </div>
        <nav>
          <ul>
            <li>
              <a href="">DISCOVER</a>
            </li>
            <li>
              <a href="">ROYALITY</a>
            </li>
            <li>
              <a href="">CREATE</a>
            </li>
          </ul>
        </nav>
        <div className="login">
          <ul>
            <li>
              <a className="login-btn" href="">
                LOGIN
              </a>
            </li>
            <li>
              <a className="btn create-account" href="https://www.google.com/" target='blank'>
                CREATE ACCOUNT
              </a>
            </li>
            <li>
              <a href="">
                <img className="moon-logo" src={moon} alt="dark mode" />
              </a>
            </li>
            <li className="menu">
              <a href="">
                <img className="moon-logo" src={menu} alt="menu" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
