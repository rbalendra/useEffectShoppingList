import React, { useEffect } from 'react';
import { useState } from 'react';

const useEffectExample = () => {
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);

	useEffect(() => {
		console.log(`Component Mounted use Effect 1`);
	}, [count1]);

	useEffect(() => {
		console.log(`Component mounted use Effect 2`);
	}, []);

	const handleIncrement = () => {
		setCount1((prev) => prev + 1);
	};

	const handleIncrement2 = () => {
		setCount2((prev) => prev + 1);
	};

	const resetAll = () => {
		setCount1(0);
		setCount2(0);
	};

	return (
		<div>
			<h1>USE EFFECT</h1>
			<h2>Counter ONE: {count1}</h2>
			<button onClick={handleIncrement}>Button1</button>
			<br></br>
			<br></br>
			<h2>Counter TWO: {count2}</h2>
			<button onClick={handleIncrement2}>Button2</button>
			<br></br>
			<br></br>
			<button onClick={resetAll}>RESET COUNT</button>
		</div>
	);
};

export default useEffectExample;
