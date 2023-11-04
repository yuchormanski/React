export function reducer(state, action) {
  if (!state.isActive && action.type !== "active") return state;
  switch (action.type) {
    case "active":
      return { ...state, balance: 500, isActive: true };
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      if (state.balance <= 0) return state;
      return { ...state, balance: state.balance - action.payload };
    case "request-loan":
      if (state.loan > 0) return state;

      return {
        ...state,
        balance: state.balance + action.payload,
        loan: action.payload,
      };
    case "pay-loan":
      if (state.loan !== 5000) return state;

      return { ...state, balance: state.balance - state.loan, loan: 0 };
    case "close":
      if (state.balance !== 0 || state.loan !== 0) return state;

      return initialState;
    default:
      throw new Error("Action is unknown!");
  }
}

export const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};
