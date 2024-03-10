import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import cls from "./Button.module.css";
import { classNames } from "../../lib/classNames.ts";

export enum ButtonSize {
  M = "size-m",
  L = "size-l",
  XL = "size-xl",
}

export enum ButtonTheme {
  OUTLINE = "outline",
  CLEAR = "clear",
  BACKGROUND = "background",
  BLACK = "black"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: ButtonSize;
  theme?: ButtonTheme;
  children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    size = ButtonSize.L,
    theme = ButtonTheme.OUTLINE,
    children,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[size], cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
