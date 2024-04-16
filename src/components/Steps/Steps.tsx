import {classNames} from "../../lib/classNames.ts";
import cls from './Steps.module.css'
import {memo} from "react";
import {Button, ButtonSize, ButtonTheme} from "../Button/Button.tsx";

interface StepsProps {
    className?: string;
    reversed?:boolean;
    image: string
    phoneImage:string;
    text: string
    button: boolean
}

const Steps = memo((props: StepsProps) => {
    const {className, text, button, image, phoneImage, reversed} = props

    const mods: { [p: number]: boolean | undefined } = {
        [cls.reversed]: reversed,
    }
    return (
        <div className={classNames(cls.Steps, mods, [className])}>
            <div className={cls.phoneWrapper}>
                <img src={image} className={cls.image} alt=""/>
                <div className={cls.wrapper}>
                    <div className={cls.container}>{text}</div>
                    {button && <Button onClick={() => window.open("https://t.me/Telesticksbot")} size={ButtonSize.XL} className={cls.btn} theme={ButtonTheme.BACKGROUND}>Telegram Bot</Button>}
                </div>
            </div>
                <img className={cls.phone} src={phoneImage} alt=""/>
        </div>
    );
});

export default Steps;