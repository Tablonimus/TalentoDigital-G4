export const showUsersHTML = (users) => {
  let container = document.getElementById("container");
  let cards = "";

  users.forEach(
    (user) =>
      (cards += `
                    <div>
                        <img src="${user.image}">
                        <ul>
                            <li>${user.name}</li>
                            <li>${user.phone}</li>
                            <li>${user.email}</li>
                        </ul>
                    </div>
      `)
  );

  container.innerHTML += cards;
};
