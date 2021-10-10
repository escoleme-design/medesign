import { ReactNode } from "react";

export type ButtonBaseProps = {
    variation: "primary" | "ghost" | "dashed" | "link" | "text" | "default";
    size: "large" | "middle" | 'small';
    onClick: Function;
    shape: "default" | "circle" | "small";
    loading: boolean | { delay: number };
    block: boolean;
    danger: boolean;
    disabled: boolean;
    href: string;
    htmlType: string;
    target: string;
    leadingIcon: ReactNode;
  }
  
  const ButtonBase: React.FC<ButtonBaseProps> = (props) => {
    return (
      <button
        className={`aaa`}
      >
        sqqw
        {/* {props.children} */}
      </button>
    )
  }
  
  export default ButtonBase;