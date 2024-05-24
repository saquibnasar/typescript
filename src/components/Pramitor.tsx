type Color = "red" | "green" | "yellow" | "purple";
type ButtonProps = {
  backgroundColor?: Color;
  color?: Color;
  fontSize?: number;
  pillShape?: boolean;
  padding?: number[];
  borderRadius: Record<string, number>;
  onClick: (word: string) => number;
  children: React.ReactNode;

  // borderRadius: {
  //   topLeft: number;
  //   topRight: number;
  //   bottomLeft: number;
  //   bottomRight: number;
  // };
};

// type ButtonProps = {
//   style: React.CSSProperties;
// };

export default function Pramitor({
  backgroundColor,
  fontSize,
  padding,
  borderRadius,
  onClick,
  children,
}: ButtonProps) {
  // export default function Pramitor({ style }: ButtonProps) {
  return (
    <>
      {/* {backgroundColor}
    {fontSize}
    {pillShape} */}

      {/* <button style={style}>Click me</button> */}
      {children}
    </>
  );
}
