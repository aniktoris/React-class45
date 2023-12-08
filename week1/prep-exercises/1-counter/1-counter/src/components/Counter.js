import { useState } from 'react';
import Button from './Button';
import Count from './Count';

function Counter() {
  const [count, setCount] = useState(0);

  function addOne() {
    setCount(count + 1);
  }

  let feedback = count > 10 ? "It's higher than 10!" : 'Keep counting...';

  return (
    <div>
      <Button increment={addOne} />
      <Count count={count} />
      {feedback}
    </div>
  );
}

export default Counter;
