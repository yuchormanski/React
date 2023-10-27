import { Currency } from "./Currency";
import { currencies } from "../App";

export function CurrencySection({ onCurrencyChange }) {
  return (
    <select onChange={(e) => onCurrencyChange(e.target.value)}>
      {currencies.map((c) => (
        <Currency value={c} key={c} />
      ))}
    </select>
  );
}
