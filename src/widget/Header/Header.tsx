import Logo from "../../assets/Logo.svg";
import cls from "./Header.module.css";
import {useNavigate} from "react-router-dom";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";
import TikTok from "../../assets/TikTok.svg";
import YouTube from "../../assets/YouTube.svg";
import LinkedIn from "../../assets/LinkedIn.svg";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className={cls.Header}>
            <section className={cls.overlay}>
                <img
                    src={Logo as string}
                    alt=""
                    onClick={() => navigate("/")}
                    className={cls.logo}
                />
                <div className={cls.container}>
                    <div className={cls.socials}>
                        <img src={Facebook as string} alt=""/>
                        <img src={Instagram as string} alt=""/>
                        <img src={TikTok as string} alt=""/>
                        <img src={YouTube as string} alt=""/>
                        <img src={LinkedIn as string} alt=""/>
                    </div>
                    <div className={cls.links}>
                        <p>Why us?</p>
                        <p>Contact</p>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;
