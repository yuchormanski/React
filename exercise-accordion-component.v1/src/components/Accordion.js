import AccordionItem from "./AccordionItem.js";

export function Accordion({ faqs }) {
  return (
    <div className="accordion">
      {faqs.map((item, i) => (
        <AccordionItem
          num={i}
          title={item.title}
          text={item.text}
          key={item.title}
        />
      ))}
    </div>
  );
}
