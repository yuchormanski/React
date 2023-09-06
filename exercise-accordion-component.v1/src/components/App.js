import "./styles.css";
import { faqs } from "../assets/faqs.js";
import { Accordion } from "./Accordion";

export default function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}
