import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CatForm from './CatForm';
import CatList from './CatList';
import CatItem from './CatItem';
import { useState } from 'react';
function App() {
  const [cats, setCats] = useState([{
    name: "new Bob",
      stage: "adult",
      breed: "American"
  },
  {
    name: "Meoww",
    stage: "young",
    breed: "Russian"
  },
  {
    name: "Meo Meoww",
    stage: "young",
    breed: "Russian"
  }
]);
function generateLinearGradient(text) {
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
}
function setCatItemColor() {
  const catItems = document.querySelectorAll(".cat-item");
  catItems.forEach((catItem) => {
    const catItemName = catItem.querySelector(".cat-item-name");
    const catItemNameValue = catItemName.textContent;
    // Random random gradient color base on the catItemNameValue text
    const linearGradient = generateLinearGradient(catItemNameValue);
    catItem.style.background = linearGradient;
  });
}
const handleCatSubmit = (name,stage,breed, imageUrl,gender) => {
  const newCat = {
    name,
    stage,
    breed, 
    imageUrl,
    gender
  };
  setCats((prevCats) => [newCat, ...prevCats]); //truyen newCat vao dau mang roi duyet de them cac thanh phan cu vao mang
};
setCatItemColor();
  return (
    <div className="App">
      <Header/>
      <CatForm handleCatSubmit={handleCatSubmit}/>
      <CatList cats={cats}/>
    </div>
  );
}

export default App;
