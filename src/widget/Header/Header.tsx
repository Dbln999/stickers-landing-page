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
          <p onClick={() => navigate("/stickerize")}>Stickerize</p>
          <p onClick={() => navigate("/about")}>About</p>
          <p onClick={() => navigate("/support")}>Support</p>
        </div>
      </section>
    </header>
  );
};

export default Header;
