import { useState } from "react";

const UseStateObject = () => {
    const [name, setName] = useState("Rokon");
    const [age, setAge] = useState(24);
    const [hobby, setHobby] = useState("Reading books");

    const displayPerson = () => {
        setName("Raj");
        setAge(27);
        setHobby("Swim");
    };

    return (
        <>
            <h2>{name}</h2>
            <h3>{age}</h3>
            <h4>Enjoys: {hobby}</h4>
            <button className="btn" onClick={displayPerson}>
                Show Raj
            </button>
        </>
    );
};

export default UseStateObject;
