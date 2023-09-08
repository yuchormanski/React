export default function Text({ bill, tip, friendTip }) {
  const outputTip = bill * ((tip + friendTip) / 2 / 100);
  return (
    <div>
      <h2>{`You pay $${bill + outputTip} ($${bill} + $${outputTip} tip)`}</h2>
    </div>
  );
}
