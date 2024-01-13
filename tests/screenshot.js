import * as React from 'react';
import { Tooltip } from './Tooltip';

function Counter({ name }) {
  const [count, setCount] = React.useState(0);

  function onClick() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <h2 style={{ color: 'teal', fontSize: 24 }}>
        {name}'s count: {count}
      </h2>
      <Tooltip content="Add 1">
        <button type="button" onClick={onClick}>
          +
        </button>
      </Tooltip>
    </>
  );
}
