import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeEmail } from "../store/userSlice";
import { RootState } from "../store/store";

import { addUser } from "../store/userSlice";

export const Email = () => {
  const dispatch = useDispatch();

  const lanzarDatos = () => {
    const datos = {
      name: "jorge",
      username: "jorgezamy",
      email: "jorgezamy@gmail.com",
    };

    dispatch(addUser(datos));
  };

  const email = useSelector((state: RootState) => state.user.email);

  const changeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeEmail(e.target.value));
  };

  return (
    <div>
      <div>
        <span>email</span>
        <input type="text" defaultValue={email} onChange={changeEmailHandler} />
        <button onClick={lanzarDatos}>Update</button>
      </div>
    </div>
  );
};
