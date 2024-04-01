import {ChangeEvent, ForwardedRef, forwardRef, memo, useCallback, useState} from "react";
import cls from './Contact.module.css'
import {classNames} from "../../lib/classNames.ts";
import Heading from "../../components/Heading/Heading.tsx";
import {Input, InputSize} from "../../components/Input/Input.tsx";
import {Button, ButtonSize, ButtonTheme} from "../../components/Button/Button.tsx";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {messageActions} from "../../store/messageSlice/messageSlice.ts";
import axios from "axios";

const Contact = memo(forwardRef((props, ref: ForwardedRef<HTMLHeadingElement>) => {
    const {} = props

    const message = useAppSelector(state => state.message?.message)
    const dispatch = useAppDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")

    const onChangeEmail = useCallback(
        (value?: string) => {
            setEmail(value!)
            dispatch(messageActions.updateForm({ email: value || "" }));
        },
        [dispatch]
    );

    const onChangeName = useCallback(
        (value?: string) => {
            setName(value!)
            dispatch(messageActions.updateForm({ name: value || "" }));
        },
        [dispatch]
    );

    const onChangeMessage = useCallback(
        (e: ChangeEvent<HTMLTextAreaElement>) => {
            setText(e.target.value!)
            dispatch(messageActions.updateForm({ message: e.target.value || "" }));
        },
        [dispatch]
    );
    const sendMessage = async () => {
        setName("")
        setText("")
        setEmail("")
        await axios.post("https://telestickers-lbdc5wdmna-lz.a.run.app/api/email/send", message)
        dispatch(messageActions.updateForm({ message: "", name: "", email: "" }));

    }


    return (
        <section className={classNames(cls.Contact, {}, [])}>
            <Heading ref={ref} text={"Contact us"}></Heading>
            <div className={cls.wrapper}>
                <div className={cls.inputWrapper}>
                    <Input onChange={onChangeName} value={name} placeholder={"Name"} size={InputSize.SMALL}></Input>
                    <Input onChange={onChangeEmail} value={email} placeholder={"Email"} size={InputSize.SMALL}></Input>
                </div>
                <textarea onChange={onChangeMessage} value={text} placeholder={"Message"} className={cls.textarea}></textarea>
                <Button onClick={sendMessage} className={cls.btns} theme={ButtonTheme.BLACK} size={ButtonSize.XL}>Send</Button>
                <p className={cls.or}>or</p>
                <Button className={cls.btns} onClick={() => window.open("https://t.me/Telesticksbot")} theme={ButtonTheme.BACKGROUND} size={ButtonSize.XL}>Start Yourself</Button>
            </div>

        </section>
    );
}));

export default Contact;