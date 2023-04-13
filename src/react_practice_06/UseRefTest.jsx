import React, { useRef } from "react";

function UseRefTest(props) {
  const inputElement = useRef(null);

  const onButtonClick = () => {
    // `current`는 마운트된 input element를 가리킴
    inputElement.current.focus();
  };

  return (
    <div>
      <input ref={inputElement} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}
export default UseRefTest;
