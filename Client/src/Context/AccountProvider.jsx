import { createContext, useState , useRef } from "react";

import { useEffect } from "react";


export const AccountContext = createContext(null);

import React from "react";

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [person, setPerson] = useState({});
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const [activeUsers , setActiveUsers] = useState([])

  const [newMessageFlag, setNewMessageFlag] = useState(false);
  const [cid, setCid] = useState();



  

 

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        person,
        setPerson,
        newMessageFlag,
        setNewMessageFlag,
        cid,
        setCid,
        showloginButton,
        setShowloginButton,
        showlogoutButton,
        setShowlogoutButton,
        
        activeUsers,
        setActiveUsers
        
        
       
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
