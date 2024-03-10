import {ForwardedRef, forwardRef, memo} from "react";
import cls from './Contact.module.css'
import {classNames} from "../../lib/classNames.ts";
import Heading from "../../components/Heading/Heading.tsx";
import {Input, InputSize} from "../../components/Input/Input.tsx";
import {Button, ButtonSize, ButtonTheme} from "../../components/Button/Button.tsx";

const Contact = memo(forwardRef((props, ref: ForwardedRef<HTMLHeadingElement>) => {
    const {} = props
    return (
        <section className={classNames(cls.Contact, {}, [])}>
            <Heading ref={ref} text={"Contact us"}></Heading>
            <div className={cls.wrapper}>
                <div className={cls.inputWrapper}>
                    <Input placeholder={"Name"} size={InputSize.SMALL}></Input>
                    <Input placeholder={"Email"} size={InputSize.SMALL}></Input>
                </div>
                <textarea placeholder={"Message"} className={cls.textarea}></textarea>
                <Button className={cls.btns} theme={ButtonTheme.BLACK} size={ButtonSize.XL}>Send</Button>
                <p className={cls.or}>or</p>
                <Button className={cls.btns} theme={ButtonTheme.BACKGROUND} size={ButtonSize.XL}>Start Yourself</Button>
            </div>

        </section>
    );
}));

export default Contact;