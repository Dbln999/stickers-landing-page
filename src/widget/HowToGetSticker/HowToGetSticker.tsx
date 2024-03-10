import {classNames} from "../../lib/classNames.ts";
import cls from './HowToGetSticker.module.css'
import {forwardRef, memo} from "react";
import Steps from "../../components/Steps/Steps.tsx";
import firstStep from '../../assets/1 step.svg'
import secondStep from '../../assets/2 step.svg'
import thirdStep from '../../assets/3 step.svg'
import Heading from "../../components/Heading/Heading.tsx";

const HowToGetSticker = memo(forwardRef((props, ref) => {
    const {} = props
    return (
        <div className={classNames(cls.HowToGetSticker, {}, [])}>
            <Heading ref={ref} text={"How to get Your custom sticker?"}></Heading>
            <Steps image={firstStep as string} text={"Go to our Telegram bot, start a conversation and follow the instructions the bot will give you"} button></Steps>
            <Steps image={secondStep as string} text={"Proceed with payment for the stickers you have selected"} button={false}></Steps>
            <Steps image={thirdStep as string} text={"Receive the stickers you've ordered"} button={false}></Steps>
        </div>
    );
}));

export default HowToGetSticker;