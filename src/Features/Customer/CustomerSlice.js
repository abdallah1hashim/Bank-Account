const intialState = {
  name: "",
  nationalId: "",
  createdAt: "",
};

export default function CustomerReducer(state = intialState, action) {
  switch (action.type) {
    case "Customer/createCustomer":
      return {
        ...state,
        name: action.payload.fullname,
        nationalID: action.payload.nationalId,
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

export function createCustomer(fullname, nationalId) {
  return {
    type: "createCustomer",
    payload: { fullname, nationalId, createdAt: new Date().toISOString() },
  };
}

export function updateName(name) {
  return { type: "updateName", payload: name };
}
