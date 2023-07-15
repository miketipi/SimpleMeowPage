import React from "react";
function CatItem(props){
    return (
      <li class="cat-item">
        <a class="cat-item-link" href="#">
          <img
            class="cat-item-img"
            alt="Hinh meo"
            src={props.imageUrl}
          />
          <div class="cat-item-desc">
            <h3 class="cat-item-name">{props.name}</h3>
            <p class="cat-item-stage">{props.stage}</p>
            <p class="cat-item-breed">{props.breed}</p>
            <p class="cat-item-gender">{props.gender}</p>
          </div>
        </a>
      </li>
      )
}
export default CatItem;