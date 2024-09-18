import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const User = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <>
      <ul style={{ listStyle: "none" }}>
        <li>Nombre: {user.name}</li>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
      </ul>
    </>
  );
};
