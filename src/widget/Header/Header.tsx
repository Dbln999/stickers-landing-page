import { Button, ButtonTheme } from "../../components/Button/Button.tsx";
import Logo from "../../assets/Logo.svg";
import cls from "./Header.module.css";
const Header = () => {
  return (
    <header className={cls.Header}>
      <section className={cls.overlay}>
        <img src={Logo} alt="" className={cls.logo} />
        <div>
          <p>Stickerize</p>
          <p>About</p>
          <p>Support</p>
        </div>
      </section>
      <section className={cls.auth}>
        <Button>Log In</Button>
        <Button theme={ButtonTheme.BACKGROUND}>Sign Up</Button>
      </section>
    </header>
  );
};

export default Header;
