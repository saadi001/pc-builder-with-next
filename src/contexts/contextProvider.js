import { createContext, useState } from "react";

export const MyContext = createContext();

const contextProvider = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState("hello");
  const a = "hello";
  const contextInfo = { user };

  return (
    <div>
      <MyContext.Provider value={contextInfo}>{children}</MyContext.Provider>
    </div>
  );
};

export default contextProvider;
