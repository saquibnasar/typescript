import Child2 from "./Child2";

export default function Parent2() {
  return (
    <>
      <Child2 countValue={5} countHistory={[true, false, 6]} />
    </>
  );
}
