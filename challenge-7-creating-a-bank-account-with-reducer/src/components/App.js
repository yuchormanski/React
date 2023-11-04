import { useReducer } from "react";
import Button from "./Button.js";
import Output from "./Output.js";

import { initialState, reducer } from "../reducer.js";

function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="main-app">
      <h2>useReducer Bank Account</h2>
      <Output>Balance: {balance}</Output>
      <Output>Loan: {loan}</Output>

      <Button dispatch={dispatch} status={isActive} type={"active"}>
        Open account
      </Button>

      <Button
        dispatch={dispatch}
        payload={150}
        status={!isActive}
        type={"deposit"}
      >
        Deposit 150
      </Button>

      <Button
        dispatch={dispatch}
        payload={50}
        status={!isActive}
        type={"withdraw"}
      >
        Withdraw 50
      </Button>

      <Button
        dispatch={dispatch}
        payload={5000}
        status={!isActive}
        type={"request-loan"}
      >
        Request a loan of 5000
      </Button>

      <Button
        dispatch={dispatch}
        payload={5000}
        status={!isActive}
        type={"pay-loan"}
      >
        Pay loan
      </Button>

      <Button dispatch={dispatch} status={!isActive} type={"close"}>
        Close account
      </Button>
    </div>
  );
}

export default App;
