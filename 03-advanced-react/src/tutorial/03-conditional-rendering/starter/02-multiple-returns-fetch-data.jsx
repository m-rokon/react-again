import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    setIsError(true);
                    setIsLoading(false);
                }
                const user = await response.json();
                setUser(user);
                // console.log(user);
            } catch (error) {
                setIsError(true);
                console.log(error);
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>There was an error...</h2>;
    }

    return (
        <div>
            <img
                style={{ width: "150px", borderRadius: "15px" }}
                src={user.avatar_url}
                alt={user.login}
            />
            <h2>{user.name}</h2>
            <h5>Works at: {user.company}</h5>
            <p>{user.bio}</p>
        </div>
    );
};
export default MultipleReturnsFetchData;
