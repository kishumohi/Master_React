import { useState } from "react";

function countInitial() {
  //   console.log("Run Function");
  return 0;
}

const Counter = () => {
  const [count, setCount] = useState(() => countInitial());
  const [countOBJ, setCountOBJ] = useState({ countt: 0, theme: "white" });
  const countO = countOBJ.countt;
  const themeO = countOBJ.theme;

  // With object Count Function
  const handleAddObj = () => {
    setCountOBJ((prevSt) => {
      return { ...prevSt, countt: prevSt.countt + 1, theme: "green" };
    });
  };
  const handleMinusObj = () => {
    if (countO > 0) {
      setCountOBJ((prevSt) => {
        return { ...prevSt, countt: prevSt.countt - 1, theme: "red" };
      });
    }
  };

  //   Simple Counter Function
  const HandleAdd = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const HandleMinus = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <>
      <h2>Simple Counter</h2>
      <button onClick={HandleMinus}>-</button>
      <span> ${count} </span>
      <button onClick={HandleAdd}>+</button>
      <hr />
      <h2>With Object Counter = Use Spread Operator</h2>
      <button onClick={handleMinusObj}>-</button>
      <span style={{ fontSize: 16, color: `${themeO}` }}> ${countO} </span>
      <span> {themeO} </span>
      <button onClick={handleAddObj}>+</button>
    </>
  );
};

export default Counter;
