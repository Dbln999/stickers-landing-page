import { memo } from "react";
import cls from "./Footer.module.css";
import { classNames } from "../../lib/classNames.ts";
import Logo from "../../assets/Logo.svg";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram Circle.svg";
import TikTok from "../../assets/TikTok.svg";
import YouTube from "../../assets/YouTube.svg";
import LinkedIn from "../../assets/LinkedIn Circled.svg";
interface FooterProps {
  className?: string;
}

export const Footer = memo(({ className }: FooterProps) => {
  return (
    <section className={classNames(cls.Footer, {}, [className])}>
      <div className={cls.footer}>
          <p>
              © 2024 Telestickers OÜ | telestickers.ee ™
          </p>
          <p>
              Sellel lehel avaldatud materjali ilma loata kasutamine ja levitamine on keelatud.
          </p>
      </div>
    </section>
  );
});
