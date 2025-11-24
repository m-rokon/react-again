import { useState } from "react";
import { data } from "../../../data";
const UseStateArray = () => {
	const [people, setPeople] = useState(data);
	return (
		<div>
			{people.map(({ id, name }) => {
				return (
					<div key={id}>
						<h2>{name}</h2>
					</div>
				);
			})}
		</div>
	);
};

export default UseStateArray;
