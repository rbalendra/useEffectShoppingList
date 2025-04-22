import React, { useEffect } from 'react';
import { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

	const handleIncrease = () => {
		setCount((prev) => prev + 1);
	};

	const handleDecrease = () => {
		setCount((prev) => prev - 1);
	};

	return (
		<div>
			<h1>useState</h1>
			<button onClick={handleIncrease}>Increment</button>
			<button onClick={handleDecrease}>Decrement</button>
			<button
				onClick={() => {
					setCount(0);
				}}>
				Reset
			</button>

			<h3>COUNTER {count}</h3>
		</div>
	);
};

export default Counter;
