import * as React from 'react';
import { WebPartContext } from '@microsoft/sp-webpart-base';


interface IAppContext {
  spContext: WebPartContext;
}

export const AppContext = React.createContext<IAppContext | undefined>(undefined);

// Create a custom hook to use the context
export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};