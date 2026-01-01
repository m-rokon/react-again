import { useState } from "react";

const ShortCircuitExamples = () => {
	// falsy
	const [text, setText] = useState("");
	// truthy
	const [name, setName] = useState("susan");
	const [user, setUser] = useState({ name: "john" });
	const [isEditing, setIsEditing] = useState(false);

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
		</div>
	);
};

export default ShortCircuitExamples;
