import {memo} from "react";
import cls from "./Card.module.css";
import {classNames} from "../../lib/classNames.ts";

interface CardProps {
    className?: string;
    src: string;
    title: string;
    text: string;
    image?: ImageType;
    textType?: TextType;
    size?: CardSize
}

export enum ImageType {
    BORDER = "border",
    ROUNDED = "rounded",
    CLASSIC = 'classic',
    ROUNDED_BORDER = "border rounded"
}

export enum TextType {
    STANDARD = "standard",
    BOLD = "bold"
}

export enum CardSize {
    STANDARD= "standard-size",
    SMALLER = "smaller-size"
}

export const Card = memo(({
                              className,
                              title,
                              text,
                              src,
                              image = ImageType.CLASSIC,
                              textType = TextType.STANDARD,
                              size = CardSize.STANDARD
                          }: CardProps) => {
    return (
        <div className={classNames(cls.Card, {}, [className, cls[size]])}>
            <img className={cls.image + " " + image} src={src} alt=""/>
            <h2 className={cls.title + " " + textType}>{title}</h2>
            <p className={cls.text + " " + className}>{text}</p>
        </div>
    );
});
