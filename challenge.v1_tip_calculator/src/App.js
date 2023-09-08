import { useState } from "react";
import BillInput from "./BillInput.js";
import SelectPercentage from "./SelectPercentage.js";
import Text from "./Text.js";
import Reset from "./Reset.js";

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function handleBillInput(bill) {
    setBill((b) => (b = bill));
  }

  function handleOnTip(e) {
    setTip((t) => (t = e));
  }

  function handleOnFriendTip(e) {
    setFriendTip((t) => (t = e));
  }

  function handleReset() {
    setBill(0);
    setTip(0);
    setFriendTip(0);
  }

  return (
    <div>
      <BillInput bill={bill} onBillInput={handleBillInput} />

      <SelectPercentage tip={tip} onTip={handleOnTip}>
        <span>How did you like the service?</span>
      </SelectPercentage>

      <SelectPercentage tip={friendTip} onTip={handleOnFriendTip}>
        <span>How did your friends like the service?</span>
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Text bill={bill} tip={tip} friendTip={friendTip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
