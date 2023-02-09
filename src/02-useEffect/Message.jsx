import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setcoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    // console.log("Menssage Mounted");

    const onMouseMove = ({ x, y }) => {
      //const coords = { x, y };
      //console.log(coords);
      setcoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      //   console.log("Menssage Unmounted");
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(coords)}
    </>
  );
};
