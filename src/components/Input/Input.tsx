import React, { InputHTMLAttributes, memo } from "react";
import cls from "./Input.module.css";
import { classNames } from "../../lib/classNames.ts";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;
interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    onChange,
    value,
    type = "text",
    placeholder,
    ...otherProps
  } = props;
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChangeHandler}
      {...otherProps}
      className={classNames(cls.Input, {}, [className])}
    ></input>
  );
});
