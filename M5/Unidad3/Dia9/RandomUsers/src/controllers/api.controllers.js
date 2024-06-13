/*------- API ------------*/
let URL_BASE = "https://randomuser.me/api/?results=5";
export const getRandomUsers = async (url = URL_BASE) => {
  try {
    let response = await fetch(url);
    let data = await response.json();


    let formatedData = data.results.map((user) => {
      return {
        name: `${user.name?.first} ${user.name?.last}` || "Unknown",
        phone: user.phone || "Unknown",
        email: user.email || "Unknown",
        image:
          user.picture?.medium ||
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      };
    });

    
    return formatedData;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};
