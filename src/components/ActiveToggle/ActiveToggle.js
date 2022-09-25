import "./ActiveToggle.css";
import { useState } from "react";

function ActiveToggle() {
  const [state, setState] = useState(false);
  return (
    <main>
      <div className={`box  ${state === true && "box--active"}`} />
      <button
        type="button"
        onClick={() => setState((previousState) => !previousState)}
      >
        {state ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}

export default ActiveToggle;
