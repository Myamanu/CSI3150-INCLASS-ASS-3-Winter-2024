import React from 'react';
import './Counter.css'; // Import CSS file for styling

function Counter() {
  //declare the state
  const [count, setCount] = React.useState(0);

  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1); // Update the count state by adding 1
  };

  // Function to decrement the count
  const decrementCount = () => {
    setCount(count - 1); // Update the count state by subtracting 1
  };

  return (
    <div className="counter">
      <h2 className="Count">Count: {count}</h2>
      <div className="buttons">
         {/* Button to decrement count */}
        <button className="dec" onClick={decrementCount}>
          Decrement(-)
          {/* Button to increment count */}
        </button>
        <button className="inc" onClick={incrementCount}>
          Increment(+)
        </button>
      </div>
    </div>
  );
}
// export to App.js
export default Counter;