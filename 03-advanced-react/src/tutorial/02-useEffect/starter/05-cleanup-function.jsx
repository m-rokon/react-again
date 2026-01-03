import { useState } from "react";

const CleanupFunction = () => {
	const [toggle, seToggle] = useState(false);

	return (
		<div>
			<button className="btn">toggle</button>
		</div>
	);
};

export default CleanupFunction;
