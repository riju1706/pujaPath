import React, { createContext, useEffect, useState } from "react";

export const closeContext = createContext();

function CloseContextProvider({ children }) {
  const [closeLogin, setCloseLogin] = useState(true);
  const [userLogin, setUserLogin] = useState(false);
  const [imgUpdate, setImgUpdate] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    user && setUserLogin(true);
  });

  const userLoginFn = (value) => {
    setUserLogin(value);
  };

  const closeFunction = (value) => {
    setCloseLogin(value);
  };

  const imageUpdateFn = (value) => {
    setImgUpdate(value);
  };
  const registeDialogOpen = () => {
    setOpen(true);
  };
  const registeDialogClose = () => {
    setOpen(false);
  };

  return (
    <closeContext.Provider
      value={{
        closeFunction,
        closeLogin,
        userLogin,
        userLoginFn,
        imageUpdateFn,
        imgUpdate,
        registeDialogClose,
        registeDialogOpen,
        open,
      }}
    >
      {children}
    </closeContext.Provider>
  );
}

export default CloseContextProvider;
