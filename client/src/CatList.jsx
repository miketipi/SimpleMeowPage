import React from "react";
import CatItem from "./CatItem";
function CatList(props) {
  return (
    <section id="cats">
      <h2>List of Cats</h2>
      <ul id="cat-list" className="cat-list">
        {props.cats.map((cat) => {
          return <CatItem cat={cat} />;
        })}
      </ul>
    </section>
  );
}
export default CatList;
