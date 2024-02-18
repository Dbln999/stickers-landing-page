import { memo } from "react";
import cls from "./InputFormWrapper.module.css";
import { classNames } from "../../lib/classNames.ts";
import { Input } from "../Input/Input.tsx";
interface InputFormWrapperProps {
  className?: string;
  title: string;
  onChange: () => void;
}

export const InputFormWrapper = memo((props: InputFormWrapperProps) => {
  const { title, className, onChange } = props;
  return (
    <div className={classNames(cls.InputFormWrapper, {}, [className])}>
      <label htmlFor={title}>{title}</label>
      <Input onChange={onChange} name={title} placeholder={title}></Input>
    </div>
  );
});
