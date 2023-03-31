import { createContext } from 'react';

const GlobalContext = createContext(null);

const GlobalProvider = GlobalContext.Provider;

export { GlobalContext, GlobalProvider };
