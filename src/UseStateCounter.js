import React, { useState } from "react";
// import

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>counter</h2>
        <h1>{value}</h1>
        <button className="btn red" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn " onClick={reset}>
          reset
        </button>
        <button className="btn green" onClick={() => setValue(value + 1)}>
          increase
        </button>

        <p>
          This counter shows the use of one the most popular React Hook -
          useState.
        </p>
      </section>
    </>
  );
};

export default UseStateCounter;
