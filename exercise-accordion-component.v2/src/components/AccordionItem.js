export default function AccordionItem({
  num,
  title,
  curOpen,
  onOpen,
  children,
}) {
  const isOpen = num === curOpen;
  const currentNum = num < 9 ? `0${num + 1}` : num + 1;

  function handleToggleClick() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen && "open"}`} onClick={handleToggleClick}>
      <p className="number">{currentNum}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
