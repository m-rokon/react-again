import { useEffect, useState } from "react";

const CleanupFunction = () => {
	const [toggle, setToggle] = useState(false);

	const SimpleComponent = () => {
		useEffect(() => {
			console.log("Hi from simple component");
		}, []);
		return <h2>Hello</h2>;
	};

	return (
		<div>
			<button className="btn" onClick={() => setToggle(!toggle)}>
				toggle
			</button>
			{toggle && <SimpleComponent />}
		</div>
	);
};

export default CleanupFunction;
