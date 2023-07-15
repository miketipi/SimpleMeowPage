import React from "react";
import CatItem from "./CatItem";
function CatList(props){
    return(<section id="cats">
    <h2>List of Cats</h2>
    <ul id="cat-list" class="cat-list">
    {props.cats.map((cat) => {
        return (<CatItem name = {cat.name} 
            stage = {cat.stage}
            breed = {cat.breed}
            imageUrl = {cat.imageUrl}
            gender = {cat.gender} />);
    })}
    </ul>
    </section>);
}
export default CatList;