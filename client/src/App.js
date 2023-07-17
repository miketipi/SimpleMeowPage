import Header from "./Header";
import CatForm from "./CatForm";
import CatList from "./CatList";
import CatItem from "./CatItem";
import { useState } from "react";
import "./styles.css";
function App() {
  const [cats, setCats] = useState([
    {
      name: "Byron",
      stage: "Kitten",
      breed: "American Short Hair",
      avatar:
        "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2021/09-24/American+Shorthair+kitten+ready+to+pounce-min.jpg"
    },
    {
      name: "Missy",
      stage: "Young",
      breed: "Domestic Short Hair",
      avatar:
        "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2021/09-24/American+Shorthair+kitten+ready+to+pounce-min.jpg"
    }
  ]);

  const handleCatSubmit = (name, stage, breed, avatar, gender) => {
    const newCat = {
      name,
      stage,
      breed,
      avatar,
      gender
    };
    setCats((prevCats) => [newCat, ...prevCats]); //truyen newCat vao dau mang roi duyet de them cac thanh phan cu vao mang
  };
  return (
    <div className="App">
      <Header />
      <CatForm handleCatSubmit={handleCatSubmit} />
      <CatList cats={cats} />
    </div>
  );
}

export default App;
