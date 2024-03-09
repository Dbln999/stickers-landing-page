import {memo} from "react";
import cls from "./MainContent.module.css";
import {classNames} from "../../lib/classNames.ts";
import TgLogo from '../../assets/Telegram Logo.png'
import Star from '../../assets/start.svg'
import {Button, ButtonSize, ButtonTheme,} from "../../components/Button/Button.tsx";

interface MainContentProps {
  className?: string;
}

const points = ["Baltics #1", "High-Quality Products", "Low Prices"];

export const MainContent = memo(({ className }: MainContentProps) => {
  return (
      <section className={classNames(cls.MainContent, {}, [className])}>
          <section className={cls.info}>
              <h1>Express yourself beyond the chat with Telegram stickers you can hold.</h1>
              {points.map((point) => (
                  <div className={cls.point}>
                      <img src={Star as string} alt=""/>
                      <p>{point}</p>
                  </div>
              ))}
              <div className={cls.btnContainer}>
                  <Button size={ButtonSize.XL} theme={ButtonTheme.BACKGROUND}>
                      Stickersize!
                  </Button>
                  <Button theme={ButtonTheme.CLEAR} size={ButtonSize.XL}>How to start?</Button>
              </div>
          </section>
          <div>
            <img src={TgLogo as string} className={cls.tgLogo} alt=""/>
          </div>
          <div className={cls.brand}>
              <h1 className={cls.phrase}>Bring Your Telegram Stickers to life.</h1>
          </div>
      </section>
  );
});
