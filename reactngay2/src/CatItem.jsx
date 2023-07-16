import React from "react";
function CatItem({ cat }) {
  const generateLinearGradient = (text) => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }

    let r = (hash & 0xff0000) >> 16;
    let g = (hash & 0x00ff00) >> 8;
    let b = hash & 0x0000ff;

    let color1 = `rgb(${r}, ${g}, ${b})`;
    let color2 = `rgb(${g}, ${b}, ${r})`;

    let linearGradient = `linear-gradient(45deg, ${color1}, ${color2})`;

    return linearGradient;
  };
  const linearGradient = generateLinearGradient(cat.name);
  return (
    <li className="cat-item" style={{ background: linearGradient }}>
      <a className="cat-item-link" href="#">
        <img className="cat-item-img" src={cat.avatar} alt="" />
        <div className="cat-item-desc">
          <h3 className="cat-item-name">{cat.name}</h3>
          <p className="cat-item-stage">{cat.stage}</p>
          <p className="cat-item-breed">{cat.breed}</p>
          <p className="cat-item-gender">{cat.gender}</p>
        </div>
      </a>
    </li>
  );
}
export default CatItem;
