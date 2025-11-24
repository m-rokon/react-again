import React from "react";
import ReactDOM from "react-dom/client";

function Greetings() {
	return (
		<div>
			<Person />
			<Message />
		</div>
	);
}

const Person = () => <h2>Name is Rokon</h2>;
const Message = () => {
	return <p>This example is showing the nested component.</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greetings />);
