import { FC, HtmlHTMLAttributes, ReactNode } from "react";
import styles from "./container.module.css";

interface ContainerProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  );
};
