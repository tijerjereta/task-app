import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "Diego",
    email: "info@diegorivas-dev.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("llama Use Effect");
  }, []);

  useEffect(() => {
    // console.log("Form state changed");
  }, [formState]);

  useEffect(() => {
    // console.log("email changed");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>

      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="test@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "Diego Rivas" && <Message />}
    </>
  );
};
