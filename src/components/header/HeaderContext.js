import React, { useState } from "react";

export const headerContext = React.createContext();

function HeaderContextProvider({ children }) {
  const [open, setOpen] = useState(false);

  const value = { open, setOpen };

  return (
    <headerContext.Provider value={value}>{children}</headerContext.Provider>
  );
}

export default HeaderContextProvider;
