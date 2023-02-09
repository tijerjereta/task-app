import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  // console.log(user.nombre);
  // const name = user.nombre;
  // console.log(name);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <h1>{name}</h1>
      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 1, name: "Diego", email: "diegorivas@google.com" })
        }
      >
        Establecer usuario
      </button>
    </>
  );
};
