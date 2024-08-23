import * as React from 'react';
import { WebPartContext } from '@microsoft/sp-webpart-base';

export const AppContext = React.createContext<WebPartContext | undefined>(undefined);

// Create a custom hook to use the context
export const useAppContext = () : WebPartContext => {
  const context: WebPartContext | undefined = React.useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};