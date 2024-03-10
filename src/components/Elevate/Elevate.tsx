import {classNames} from "../../lib/classNames.ts";
import cls from './Elevate.module.css'
import {Button, ButtonSize, ButtonTheme} from "../Button/Button.tsx";
import {memo} from "react";

const Elevate = memo(() => {
    return (
        <div className={classNames(cls.Elevate, {}, [])}>
            <h1>Elevate Your Experience any time</h1>
            <p>Test Our Service and Form Your Own Opinion</p>
            <div className={cls.btnContainer}>
                <Button size={ButtonSize.XL} theme={ButtonTheme.BACKGROUND}>
                    Stickersize!
                </Button>
                <Button theme={ButtonTheme.OUTLINE} size={ButtonSize.XL}>How to start?</Button>
            </div>
        </div>
    );
});

export default Elevate;