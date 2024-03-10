import {classNames} from "../../lib/classNames.ts";
import cls from './Steps.module.css'
import {memo} from "react";
import {Button, ButtonSize, ButtonTheme} from "../Button/Button.tsx";

interface StepsProps {
    className?: string;
    image: string
    text: string
    button: boolean
}

const Steps = memo((props: StepsProps) => {
    const {className, text, button, image} = props
    return (
        <div className={classNames(cls.Steps, {}, [className])}>
            <img src={image} className={cls.image} alt=""/>
            <div className={cls.wrapper}>
                <div className={cls.container}>{text}</div>
                {button && <Button size={ButtonSize.XL} className={cls.btn} theme={ButtonTheme.BACKGROUND}>Telegram Bot</Button>}
            </div>
        </div>
    );
});

export default Steps;