import { useState } from "react";
import Pramitor from "./Pramitor";

export default function PramitorHeder() {
  const [count, setCount] = useState(0);
  const onClick = (word: string) => {
    return 5;
  };
  return (
    <>
      {/* one way to do this  */}
      <Pramitor
        backgroundColor="red"
        fontSize={40}
        padding={[4, 6, 234, 64]}
        borderRadius={{
          topLeft: 0,
          topRight: 5,
          bottomLeft: 6,
          bottomRight: 3,
        }}
        onClick={onClick}
        setCount={setCount}
      >
        Click me
      </Pramitor>

      {/* another way */}
      {/* <Pramitor style={{backgroundColor :"red", fontSize:40,color : 'White',  }} />  */}
    </>
  );
}
