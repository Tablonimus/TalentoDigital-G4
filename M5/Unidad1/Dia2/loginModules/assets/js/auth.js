/* EXPORT => palabra reservada que me permite exportar funciones y variables */
import { users } from "./data/users.js";


/* FUNCIÓN LOGIN  */
export const login = (email, password) => {
  const loggedUser = users.find(
    (user) => user.email === email && user.password === password
  );
  return loggedUser; //puede ser undefined ó {...}
};
