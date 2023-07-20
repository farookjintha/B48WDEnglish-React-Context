import { useRef } from "react";
import CompD from "./CompD";

const CompC = () => {
  const ref = useRef(0);
  const inputRef = useRef();

  const buttonRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleColorChange = () => {
    buttonRef.current.style.background = "red";
  };

  const handleInc = () => {
    ref.current = ref.current + 1;
    console.log("REF COUNT:::: ", ref.current);
  };

  return (
    <div>
      <h1>Comp C</h1>
      <div>
        <input ref={inputRef} />

        <div>
          <button onClick={handleFocus}>FOCUS THE INPUT</button>
        </div>
      </div>

      <div>
        <button ref={buttonRef}>REF BUTTON</button>

        <h2>CLICK TO CHANGE</h2>
        <button onClick={handleColorChange}>CHANGE COLOR</button>
      </div>

      <h1>COUNT: {ref.current}</h1>
      <button onClick={handleInc}>INCRMEENT COUNT</button>
      <CompD />
    </div>
  );
};

export default CompC;
