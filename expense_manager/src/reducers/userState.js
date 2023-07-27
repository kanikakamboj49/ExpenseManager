const isActive = false;

const userState = (state = isActive, action) => {
  switch (action.type) {
    case "login":
      return true;
    case "logout":
      return false;
    default:
      return state;
  }
};

export default userState;
