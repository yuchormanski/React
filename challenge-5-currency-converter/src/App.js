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
      if (currencyFrom === currencyTo) return;

      async function fetchCurrencies() {
        setError("");
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${userInput}&from=${currencyFrom}&to=${currencyTo}`
          );
          if (!res.ok) {
            throw new Error("Something went wrong with fetching rates");
          }
          const data = await res.json();

          setOutput((output) => data.rates[currencyTo]);
          setError("");
        } catch (err) {
          setError(err.message);
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
      <p>{output === "" ? "OUTPUT" : output}</p>
    </div>
  );
}
