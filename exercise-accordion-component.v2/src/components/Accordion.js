import { useState } from "react";
import AccordionItem from "./AccordionItem.js";

export function Accordion({ faqs }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((item, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={i}
          title={item.title}
          key={item.title}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}
