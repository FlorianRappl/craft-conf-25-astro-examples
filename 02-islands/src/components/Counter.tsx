import * as React from "react";

function Counter({ start = 0 }) {
  const [count, setCount] = React.useState(start);
  const increment = React.useCallback(() => setCount((c) => c + 1), []);

  return <button onClick={increment}>{count}</button>;
}

export default Counter;
