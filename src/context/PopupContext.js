import { createContext } from 'react';

const PopupContext = createContext(null);

const PopupProvider = PopupContext.Provider;

export { PopupContext, PopupProvider };
