import Logo from "../../assets/Logo.svg";
import cls from "./Header.module.css";
import {useNavigate} from "react-router-dom";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";
import TikTok from "../../assets/TikTok.svg";
import YouTube from "../../assets/YouTube.svg";
import LinkedIn from "../../assets/LinkedIn.svg";
import {memo} from "react";

interface HeaderProps {
    executeScroll: () => void
    executeContactScroll: () => void
}

const Header = memo(({executeScroll, executeContactScroll}: HeaderProps) => {
    const navigate = useNavigate();

    return (
        <header className={cls.Header}>
            <section className={cls.overlay}>
                <img
                    src={Logo as string}
                    alt="logo"
                    onClick={() => navigate("/")}
                    className={cls.logo}
                />
                <div className={cls.container}>
                    <div className={cls.socials}>
                        <img src={Facebook as string} alt="facebook" onClick={() => window.open("https://www.facebook.com/profile.php?id=61556891175713")}/>
                        <img src={Instagram as string} alt="instagram" onClick={() => window.open("https://www.instagram.com/telest1ckers?igsh=MTU1c2FuYjVuaHh6aA==")}/>
                        <img src={TikTok as string} alt="tiktok" onClick={() => window.open("https://www.tiktok.com/@telestickers?_t=8l58vazWZjU&_r=1")}/>
                        <img src={YouTube as string} alt="youtube"/>
                        <img src={LinkedIn as string} alt="linkedin" onClick={() => window.open("https://www.linkedin.com/company/telestickers/")}/>
                    </div>
                    <div className={cls.links}>
                        <p onClick={() => executeScroll()}>Why us?</p>
                        <p onClick={() => executeContactScroll()}>Contact</p>
                    </div>
                </div>
            </section>
        </header>
    );
});

export default Header;
