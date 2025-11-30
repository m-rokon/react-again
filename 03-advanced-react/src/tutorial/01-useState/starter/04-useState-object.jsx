import { useState } from "react";

const UseStateObject = () => {
    const [name, setName] = useState("Rokon");
    const [age, setAge] = useState(24);
    const [hobby, setHobby] = useState("Reading books");

    return (
        <>
            <h2>{name}</h2>
            <h3>{age}</h3>
            <h4>Enjoys: {hobby}</h4>
        </>
    );
};

export default UseStateObject;
