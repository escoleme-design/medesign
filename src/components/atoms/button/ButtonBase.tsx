export type ButtonBaseProps = {
  foo: string;
}

const ButtonBase: React.FC<ButtonBaseProps> = (props) => {
  return (
    <button
      className={`
      `}
    >
      {props.children}
    </button>
  )
}

export default ButtonBase;