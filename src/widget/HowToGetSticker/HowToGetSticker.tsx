import {classNames} from "../../lib/classNames.ts";
import cls from './HowToGetSticker.module.css'
import {ForwardedRef, forwardRef, memo} from "react";
import Steps from "../../components/Steps/Steps.tsx";
import firstStep from '../../assets/1 step.svg'
import secondStep from '../../assets/2 step.svg'
import thirdStep from '../../assets/3 step.svg'
import Heading from "../../components/Heading/Heading.tsx";
import stepOnePhone from '../../assets/Phone step 1.svg'
import stepTwoPhone from '../../assets/Phone step 2.svg';
import stepThreePhone from '../../assets/Phone step 3.svg';

const HowToGetSticker = memo(forwardRef((props, ref:ForwardedRef<HTMLHeadingElement>) => {
    const {} = props
    return (
        <div className={classNames(cls.HowToGetSticker, {}, [])}>
            <Heading ref={ref} text={"How to get Your custom sticker?"}></Heading>
            <Steps phoneImage={stepOnePhone} image={firstStep as string} text={"Go to our Telegram bot, start a conversation and follow the instructions the bot will give you"} button></Steps>
            <Steps reversed phoneImage={stepTwoPhone} image={secondStep as string} text={"Proceed with payment for the stickers you have selected"} button={false}></Steps>
            <Steps phoneImage={stepThreePhone} image={thirdStep as string} text={"Receive the stickers you've ordered"} button={false}></Steps>
        </div>
    );
}));

export default HowToGetSticker;