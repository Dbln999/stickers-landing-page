import Logo from "../../assets/Logo.svg";
import cls from "./Header.module.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={cls.Header}>
      <section className={cls.overlay}>
        <img
          src={Logo}
          alt=""
          onClick={() => navigate("/")}
          className={cls.logo}
        />
        <div>
          <p>Stickerize</p>
          <p>About</p>
          <p>Support</p>
        </div>
      </section>
    </header>
  );
};

export default Header;
