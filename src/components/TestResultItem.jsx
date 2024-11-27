import { useState } from "react";
import { updateTestResultVisibility } from "../api/testResults";

const TestResultItem = ({ id, initialVisibility }) => {
  const [visibility, setVisibility] = useState(initialVisibility);
  const handleVisibility = async () => {
    const newVisibility = !visibility;
    const toggle = await updateTestResultVisibility(id, newVisibility);
    setVisibility(toggle.visibility);
  };

  return (
    <button onClick={() => handleVisibility()} className="mx-2.5">
      {visibility ? "활성화" : "비활성화"}
    </button>
  );
};

export default TestResultItem;
