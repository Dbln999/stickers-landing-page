import { memo } from "react";
import cls from "./MainContent.module.css";
import { classNames } from "../../lib/classNames.ts";
import BrandPhrase from "../../assets/Bring Your Telegram stickers to life..svg";
import Star from "../../assets/star.svg";
import {
  Button,
  ButtonSize,
  ButtonTheme,
} from "../../components/Button/Button.tsx";

interface MainContentProps {
  className?: string;
}

const points = ["Baltics #1", "High-Quality Products", "Low Prices"];

export const MainContent = memo(({ className }: MainContentProps) => {
  return (
    <section className={classNames(cls.MainContent, {}, [className])}>
      <section className={cls.info}>
        <h1>Create your individual style: emphasise your uniqueness</h1>
        {points.map((point) => (
          <div className={cls.point}>
            <img src={Star} alt="" />
            <p>{point}</p>
          </div>
        ))}
        <div className={cls.btnContainer}>
          <Button size={ButtonSize.XL} theme={ButtonTheme.BACKGROUND}>
            Stickersize!
          </Button>
          <Button size={ButtonSize.XL}>How to start?</Button>
        </div>
      </section>
      <div className={cls.brand}>
        <img className={cls.phrase} src={BrandPhrase} alt="" />
      </div>
    </section>
  );
});
