const intialState = {
  name: "",
  nationalId: "",
  createdAt: "",
};

function CustomerReducer(state, action) {
  switch (action.type) {
    case "Customer/createCustomer":
      return {
        ...state,
        name: action.payload.name,
        natationalId: action.payload.natationalId,
        createdAt: action.payload.createdAt,
      };

    case "Customer/updateName":
      return {
        ...state,
        name: action.payload.name,
      };

    default:
      return state;
  }
}

export function createCustomer(name, nationalId) {
  return { name, nationalId, createdAt: new Date().toISOString };
}
