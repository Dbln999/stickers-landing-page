import {ChangeEvent, ForwardedRef, forwardRef, memo, useCallback} from "react";
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

    const onChangeEmail = useCallback(
        (value?: string) => {
            dispatch(messageActions.updateForm({ email: value || "" }));
        },
        [dispatch]
    );

    const onChangeName= useCallback(
        (value?: string) => {
            dispatch(messageActions.updateForm({ name: value || "" }));
        },
        [dispatch]
    );

    const onChangeMessage = useCallback(
        (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(messageActions.updateForm({ message: e.target.value || "" }));
        },
        [dispatch]
    );
    const sendMessage = async () => {
        await axios.post("https://telestickers-lbdc5wdmna-lz.a.run.app/api/email/send", message)
        dispatch(messageActions.updateForm({ message: "", name: "", email: "" }));

        // await axios.post("http://13.60.41.6/email/send", message)
        // await axios.post("https://9e112ff4-7dff-4e62-89f8-db81fb7d5d88-00-1r5bc502c5svq.worf.replit.dev/email/send", message)
    }

    const email = useAppSelector(state => state.message.email)
    const name = useAppSelector(state => state.message.name)

    return (
        <section className={classNames(cls.Contact, {}, [])}>
            <Heading ref={ref} text={"Contact us"}></Heading>
            <div className={cls.wrapper}>
                <div className={cls.inputWrapper}>
                    <Input onChange={onChangeName} placeholder={"Name"} size={InputSize.SMALL}></Input>
                    <Input onChange={onChangeEmail} placeholder={"Email"} size={InputSize.SMALL}></Input>
                </div>
                <textarea onChange={onChangeMessage} placeholder={"Message"} className={cls.textarea}></textarea>
                <Button onClick={sendMessage} className={cls.btns} theme={ButtonTheme.BLACK} size={ButtonSize.XL}>Send</Button>
                <p className={cls.or}>or</p>
                <Button className={cls.btns} theme={ButtonTheme.BACKGROUND} size={ButtonSize.XL}>Start Yourself</Button>
            </div>

        </section>
    );
}));

export default Contact;