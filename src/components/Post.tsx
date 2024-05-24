import { useState } from "react";
export default function Post() {
  const [postTitle, setPostTitle] = useState<string | null>("hello world!");
  const changeTitle = () => {
    setPostTitle(null);
  };
  return (
    <>
      {/* <div>
    <h1>{postTitle}</h1>
    <button onClick={changeTitle}>change title</button>
  </div> */}
    </>
  );
}
