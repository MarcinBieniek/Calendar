// selectors

// actions
const createActionName = actionName => `app/users/${actionName}`;

// acton creators
const usersReducer = (statePart = [], action) => {
    switch (action.type) {
      default:
        return statePart;
    };
};
  
export default usersReducer;