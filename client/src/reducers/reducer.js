export const initialState = [
  {
    name: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export const reducer = (state, action) => {
  switch (action.type) {
       case 'DELETE_COMPLETED':
        return[...action.payload]
    case "ADD_NEW_ITEM":
      return [...state, action.payload];
    case "TOGGLE_COMPLETED": {
      return [...action.payload];
    }
    default:
      return state;
  }
};
