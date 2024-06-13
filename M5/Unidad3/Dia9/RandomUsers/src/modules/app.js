import { getRandomUsers } from "../controllers/api.controllers.js";
import { showUsersHTML } from "../controllers/dom.controllers.js";

/*-------PATRÓN MODULO ------------*/
export const app = (() => {
  let users = []; //

  return {
    getApiUsers: async () => {
      users = await getRandomUsers();
    },
    showUsers: () => {
      showUsersHTML(users);
    },
  };
})();
