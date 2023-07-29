import Header from "./Header";
import CatForm from "./CatForm";
import CatList from "./CatList";
import CatItem from "./CatItem";
import { useState } from "react";
import "./styles.css";
import { useEffect } from "react";
import api from "./util";
function App() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [createStatus, setCreateStatus] = useState("");
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
  useEffect(() => {
    const fetchCats = async () => {
      try {
        const res = await api.get("/cats");
        console(res.data);
        setCats(res.data);
        setLoading(false);
      } catch (error) {
        console.log("Can't complete this action", error);
        setLoading(false);
      }
      
    }
    fetchCats();
  }, []);
  const handleCatSubmit = async (name, stage, breed, avatar, gender) => {
    const newCat = {
      name,
      stage,
      breed,
      avatar,
      gender
    };
    try {
      setCreateStatus("Loading");
      setMessage("Creating a new Cat");
      const res = await api.post("/cats", newCat);
      console.log(res.data);
      const Cat = res.data;
      setCats((prevCats) => [...prevCats, Cat]); //truyen newCat vao dau mang roi duyet de them cac thanh phan cu vao mang
      setMessage("Cat created!");
      setCreateStatus("Success");
    } catch (error) {
      console.error("There are some errors");
      setMessage("Error creating cat!")
        ;
      setCreateStatus("Error");
    }
  };
  return (
    <div className="App">
      <Header />
      <CatForm handleCatSubmit={handleCatSubmit} />
      {message && (
        <p
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "5px",
            color: "#fff",
            backgroundColor:
              createStatus === "loading"
                ? "#ccc"
                : createStatus === "success"
                  ? "#4caf50"
                  : "#f44336"
          }}
        >
          {message}
        </p>
      )}
      {loading ? <p>Loading...</p> : <CatList cats={cats} />}
    </div>
  );
}

export default App;
