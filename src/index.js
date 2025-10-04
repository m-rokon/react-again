import React from "react";
import ReactDOM from "react-dom/client";

function Greetings() {
	return <h2>Hello from React</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greetings />);
