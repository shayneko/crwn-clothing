import { createContext, useState } from "react";

export const UserContext = createContext ({
  currentUser: null,
  setCurrentUser: () => null,
  
});

export const UserProvider = ({ childern }) => {
  const [currentUser, useState] = useState(null);
  const value = { currentUser, setCurrentUser };
  
  return <UserContext.Provider value={vaule}>{children}</UserContext.Provider>
}