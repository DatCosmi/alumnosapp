import React, {createContext, useReducer} from 'react';

export const authInitialState = {
  matricula: '',
  password: '',
  tipo: '',
  token: '',
  foto: '',
};

export const authContext = createContext({});

export const authProvider = ({children}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {};
};
