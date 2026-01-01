import { useState } from "react";

const ToggleChallenge = () => {
	const [toggle, setToggle] = useState(false);

	const Alert = () => {
		return <div className="alert alert-danger">Showing Alert</div>;
	};

	const handleToggle = () => {
		if (toggle) {
			setToggle(false);
			return;
		}
		setToggle(true);
	};

	return (
		<div>
			{/* <button className="btn" onClick={handleToggle}>
				toggle
			</button> */}
			<button className="btn" onClick={() => setToggle(!toggle)}>
				toggle
			</button>
			{toggle && <Alert />}
		</div>
	);
};

export default ToggleChallenge;
