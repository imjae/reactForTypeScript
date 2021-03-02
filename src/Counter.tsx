import React, { useState } from "react";

type Information = {
  name: string;
  description: string;
};

function Counter() {
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  const [info, setInformation] = useState<Information | null>(null);
  const setInfo = (info: Information) => {
      setInformation(info);
  }

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}> +1 </button>
        <button onClick={onDecrease}> -1 </button>
      </div>
    </div>
  );
}

export default Counter;
