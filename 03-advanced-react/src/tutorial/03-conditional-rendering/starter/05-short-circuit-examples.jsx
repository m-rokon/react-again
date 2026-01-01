import { useState } from "react";

const ShortCircuitExamples = () => {
	// falsy
	const [text, setText] = useState("");
	// truthy
	const [name, setName] = useState("susan");
	const [user, setUser] = useState({ name: "john" });
	const [isEditing, setIsEditing] = useState(false);

	const SomeComponent = ({ name }) => {
		return (
			<div>
				<h2>Welcome, {name}</h2>
				<button className="btn">Logout</button>
			</div>
		);
	};

	return (
		<div>
			<h2>{text || "default value"}</h2>
			{text && (
				<div>
					<h2>Whatever returns</h2>
					<h4>{name}</h4>
				</div>
			)}
			{/* using not operator */}
			{!text && (
				<div>
					<h2>Whatever returns</h2>
					<h4>{name}</h4>
				</div>
			)}
			{user && <SomeComponent name={name} />}
		</div>
	);
};

export default ShortCircuitExamples;
