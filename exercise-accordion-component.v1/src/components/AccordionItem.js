import { useState } from "react";

export default function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const currentNum = num < 9 ? `0${num + 1}` : num + 1;

  function handleToggleClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen && "open"}`} onClick={handleToggleClick}>
      <p className="number">{currentNum}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && (
        <div className="content-box">
          {text.map((el) => (
            <p style={{ padding: "5px 0 0", textIndent: "10px" }}>{el}</p>
          ))}
        </div>
      )}
    </div>
  );
}
