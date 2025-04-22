import { useState, useEffect } from 'react';

const Timer = () => {
	const [toggle, setToggle] = useState(false);
	console.log('Timer component mounted');
	return (
		<div>
			<button
				onClick={() => {
					setToggle(!toggle);
				}}>
				CLICK ME
			</button>
			{toggle && <DemoComponent />}
			{console.log(toggle)}
		</div>
	);
};

export default Timer;

function DemoComponent() {
	console.log('Demo component mounted');

	useEffect(() => {
		console.log('use effect in demo component');
		const taskOne = setInterval(() => {
			console.log('testing');
		}, 1000);

		return () => {
			clearInterval(taskOne);
			console.log('Clean up function called and demo component unmounted');
		};
	}, []);

	return <h1>I am from demo component</h1>;
}
