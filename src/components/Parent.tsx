import { useState } from "react";
import Child from "./Child";

type User = {
  name: string;
  age: number;
};
type someone = Omit<User, "age">;
function covertToArray<T>(value: T): T[] {
  return [value];
}
covertToArray(5);
covertToArray("Hello");
export default function Parent() {
  const [user, setUser] = useState<User | null>(null);

  const name = user?.name;
  return (
    <>
      {/* this is the all the value that a button has */}
      <Child type="submit" autoFocus={true} defaultValue="test" />
    </>
  );
}
