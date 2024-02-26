import { memo } from "react";
import cls from "./Card.module.css";
import { classNames } from "../../lib/classNames.ts";
interface CardProps {
  className?: string;
  src: string;
  title: string;
  text: string;
}

export const Card = memo(({ className, title, text, src }: CardProps) => {
  return (
    <div className={classNames(cls.Card, {}, [className])}>
      <img className={cls.image} src={src} alt="" />
      <h2 className={cls.title}>{title}</h2>
      <p className={cls.text}>{text}</p>
    </div>
  );
});
