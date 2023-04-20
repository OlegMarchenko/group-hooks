import { useState, useContext, createContext } from 'react';

const AlertContext = createContext();

export const useAlert = () => {
  return useContext(AlertContext);
}

export const AlertProvider = ({ children }) => {

  const [alert, setAlert] = useState(true);

  const toggle = () => setAlert(prev => !prev);

  return (
    <AlertContext.Provider value={{
      visible: alert,
      toggle
    }}>
      {children}
    </AlertContext.Provider>
  )
}

