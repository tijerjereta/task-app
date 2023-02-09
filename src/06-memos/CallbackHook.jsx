import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setcounter] = useState(10);

  const incrementFather = useCallback(() => {
    setcounter(counter + 1);
  }, [counter]);

  //   const incrementFather = () => {
  // setcounter(counter + 1);
  //   };
  return (
    <>
      <h1>Use Callback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
