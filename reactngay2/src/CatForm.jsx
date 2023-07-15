import React from "react";
import { useState } from "react";
function CatForm({ handleCatSubmit }) {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [stage, setStage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [gender, setGender] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name);
        handleCatSubmit(name, stage, breed, imageUrl, gender);
        setName("");
        setStage("");
        setBreed("");
        setImageUrl("");
        setGender("");
    };
    return (<section id="create-cat">
        <h2>Create a Cat</h2>
        <form id="catForm">
            <label for="name">Name</label>
            <input type="text" value={name} onChange={(event) => { setName(event.target.value) }} id="name" name="name" required />

            <label for="stage">Stage</label>
            <select id="stage" onChange={(event) => { setStage(event.target.value) }} value={stage} name="stage" required>
                <option value="" selected>Select stage</option>
                <option value="kitten">Kitten</option>
                <option value="young">Young</option>
                <option value="adult">Adult</option>
            </select>

            <label for="breed">Breed</label>
            <input value={breed} onChange={(event) => { setBreed(event.target.value) }} type="text" id="breed" name="breed" required />

            <label for="imageUrl">Avatar</label>
            <input type="text" onChange={(event) => { setImageUrl(event.target.value) }} value={imageUrl} id="imageUrl" name="imageUrl" required />
            <div>
            <label>Gender</label>
            <div>
                
                <input type="radio" value="Male" name="gender" id="maleRadio" style={{ display: "inline", width: "auto" }} checked={gender === "Male"} required onChange={(e) => setGender(e.target.value)}></input>
                <label for="maleRadio" style={{ display: "inline" }}>Male</label>
            </div>
            <div>
            <input type="radio" value="Female" name="gender" id="femaleRadio" style={{ display: "inline", width: "auto" }} checked={gender === "Female"} required onChange={(e) => setGender(e.target.value)}></input>
                <label for="FemaleRadio" style={{ display: "inline" }}>Female</label>
            </div>
            </div>
            <button type="submit" onClick={handleSubmit}>Create</button>
        </form>
    </section>);
}
export default CatForm;