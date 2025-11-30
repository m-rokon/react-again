import { useState } from "react";

const UseStateObject = () => {
    // const [name, setName] = useState("Rokon");
    // const [age, setAge] = useState(24);
    // const [hobby, setHobby] = useState("Reading books");

    const [person, setPerson] = useState({
        name: "Rahim",
        age: 25,
        hobby: "Gardening",
    });

    const displayPerson = () => {
        // setName("Raj");
        // setAge(27);
        // setHobby("Swim");
        // setPerson({ name: "Rafi", age: 26, hobby: "Running" });
        // setPerson({ name: "Rafi" }); // there is no other objects, so it will only show the name and other fields will be empty

        setPerson({ ...person, name: "Raju" }); // for the above problem, this is one kind of solution
    };

    return (
        <>
            <h2>{person.name}</h2>
            <h3>{person.age}</h3>
            <h4>Enjoys: {person.hobby}</h4>
            <button className="btn" onClick={displayPerson}>
                Show Person
            </button>
        </>
    );
};

export default UseStateObject;
