import { useState } from "react";

const UseStateGotcha = () => {
	const [value, setValue] = useState(0);

	const handleClick = () => {
		// setValue(value + 1);
		// console.log(value);
		/* for the above setup, console will always be 1 step behind.. to solve this, we can use the following process */
		setValue((currentState) => {
			const newValue = currentState + 1;
			console.log(newValue);

			return newValue;
		});
	};

	return (
		<div>
			<h1>{value}</h1>
			<button type="button" className="btn" onClick={handleClick}>
				increase
			</button>
		</div>
	);
};

export default UseStateGotcha;
