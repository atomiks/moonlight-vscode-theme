import React from 'react';
import Tippy from '@tippy.js/react';

function Counter({name}) {
  const [count, setCount] = useState(0);

  function onClick() {
    setCount(count => count + 1);
  }

  return (
    <>
      <h2
        style={{
          color: 'teal',
          fontSize: 24
        }}
      >
        {name}'s count: {count}
      </h2>
      <Tippy content="Add 1">
        <button onClick={onClick}>+</button>
      </Tippy>
    </>
  );
}
