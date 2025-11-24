import { useState } from "react";
import { data } from "../../../data";
const UseStateArray = () => {
	const [people, setPeople] = useState(data);
	return (
		<div>
			{people.map(({ id, name }) => {
				return <h2>{name}</h2>;
			})}
		</div>
	);
};

export default UseStateArray;
