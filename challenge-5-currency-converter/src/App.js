// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";
import { InputField } from "./components/InputField";
import { CurrencySection } from "./components/CurrencySection";

export const currencies = ["USD", "EUR", "CAD", "INR", "BGN"];

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  function handleUserInput(value) {
    setUserInput(Number(value));
  }
  function handleCurrencyFrom(currency) {
    setCurrencyFrom((currencyFrom) => (currencyFrom = currency));
  }
  function handleCurrencyTo(currency) {
    setCurrencyTo((currencyTo) => (currencyTo = currency));
  }

  useEffect(
    function () {
      const controller = new AbortController();

      if (userInput === "") return;
      if (currencyFrom === currencyTo) {
        return setOutput(userInput);
      }

      async function fetchCurrencies() {
        setError("");
        try {
          setLoader(true);

          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${userInput}&from=${currencyFrom}&to=${currencyTo}`
          );
          if (!res.ok) {
            throw new Error("Something went wrong with fetching rates");
          }
          const data = await res.json();

          setOutput((output) => data.rates[currencyTo]);
          setError("");
          setLoader(false);
        } catch (err) {
          setError(err.message);
          setLoader(false);
        }
      }

      fetchCurrencies();

      return function () {
        controller.abort();
      };
    },
    [currencyFrom, currencyTo, userInput]
  );

  return (
    <div>
      <InputField onUserInput={handleUserInput} />
      <CurrencySection onCurrencyChange={handleCurrencyFrom} />
      <CurrencySection onCurrencyChange={handleCurrencyTo} />
      {loader && <p>Loading...</p>}
      {!loader && <p>{output === "" ? "OUTPUT" : output + " " + currencyTo}</p>}
    </div>
  );
}
