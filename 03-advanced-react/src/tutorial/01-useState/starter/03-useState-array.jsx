import { useState } from "react";
import { data } from "../../../data";
const UseStateArray = () => {
	const [people, setPeople] = useState(data);

	const removeItem = (id) => {
		console.log(id);
		const newPeople = people.filter((person) => {
			return person.id !== id;
		});

		setPeople(newPeople);
	};

	const clearAllItems = () => {
		setPeople([]);
	};

	return (
		<div>
			{people.map(({ id, name }) => {
				return (
					<div key={id}>
						<h2>{name}</h2>
						<button className="btn" onClick={() => removeItem(id)}>
							remove
						</button>
					</div>
				);
			})}
			<button
				style={{ marginTop: "4rem" }}
				className="btn"
				onClick={clearAllItems}
			>
				Clear All
			</button>
		</div>
	);
};

export default UseStateArray;
