import {classNames} from "../../lib/classNames.ts";
import cls from './Heading.module.css'
import {ForwardedRef, forwardRef, memo} from "react";

interface HeadingProps{
    text:string
}

const Heading = memo(forwardRef(({text}:HeadingProps, ref: ForwardedRef<HTMLHeadingElement>) => {
    return (
        <h1 ref={ref} className={classNames(cls.title, {}, [])}>
            {text}
        </h1>
    );
}));

export default Heading;