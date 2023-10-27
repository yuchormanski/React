export function InputField({ onUserInput }) {
  return <input type="text" onChange={(e) => onUserInput(e.target.value)} />;
}
