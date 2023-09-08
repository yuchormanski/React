export default function BillInput({ bill, onBillInput }) {
  return (
    <div>
      <label name="">
        How much was the bill?
        <input
          type="text"
          value={bill}
          onChange={(e) => onBillInput(Number(e.target.value))}
          placeholder="0"
        />
      </label>
    </div>
  );
}
