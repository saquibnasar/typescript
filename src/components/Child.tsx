import { type Color } from "./Types";

// this allow me to use button atribute
// type ButtonProps = React.ComponentPropsWithoutRef<"button">;

// allow to use other thing then native type
type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary";
};

// using Intersection to trasfer value

type Button = {
  type: "button" | "submit" | "reset";
  color: Color;
};

type PrimaryButton = Button & {
  size: "8px" | "12px";
};

// eventhandler

const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  console.log(e);
  console.log("clicked");
};

// rest oprator allow me to use atribute with asining it
export default function Child({ type, autoFocus, ...rest }: ButtonProps) {
  return (
    <>
      <button type={type} autoFocus={autoFocus} {...rest} onClick={handleClick}>
        Click me !
      </button>
    </>
  );
}
