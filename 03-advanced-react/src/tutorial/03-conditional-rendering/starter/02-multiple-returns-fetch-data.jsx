import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		try {
			const fetchData = async () => {
				const response = await fetch(url);
				const user = await response.json();
				setUser(user);
				console.log(user);
			};
			fetchData();
		} catch (error) {
			console.log(error);
		}
	}, []);
	return (
		<div>
			<h2>Fetch user</h2>
		</div>
	);
};
export default MultipleReturnsFetchData;
