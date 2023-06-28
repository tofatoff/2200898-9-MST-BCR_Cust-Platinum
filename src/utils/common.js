// return the user data from the session storage
export const getUser = () => {
  const userStr = sessionStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

// return the token from the session storage
export const getToken = () => {
  const userStr = sessionStorage.getItem("user");
  if (userStr) {
    const parseUser = JSON.parse(userStr);
    return parseUser.access_token;
  } else {
    return null;
  }
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem("user");
};

// set the token and user from the session storage
export const setUserSession = (user) => {
  console.log(user);
  sessionStorage.setItem("user", JSON.stringify(user));
};
