const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
app.use(express.json());
app.use(cors()); //enable cors de khong co loi
let nextId = 2;
const cats = [{
    id: 1,
    name: "Whiskers",
    stage: "Adult",
    breed: "Siamese",
    gender: "Male",
    avatar: "https://example.com/whiskers.jpg",
  },
  {
    id: 2,
    name: "Missy",
    stage: "Young",
    breed: "Domestic Short Hair",
    gender: "Female",
    avatar: "https://example.com/avatar.jpg",
  }]
app.listen(port, () => {
    console.log("Server running on port " + port);
})
app.get('/', (req,res) =>
{
    res.send("Chuong trinh nay dang hoat dong");
})
app.get('/cats', (req,res) => {
    res.json(cats);
})
app.get('/cats/:id', (req,res) => {
    const catId = req.params.id;
    const findcat = cats.find((cat) => (catId == cat.id));
    if (findcat == null) res.send("Không tìm thấy con mèo này");
    else res.json(findcat);
})
app.post("/cats", (req, res) => {
    try{
    const {name , breed, avatar, stage, gender} = req.body;
    const id = nextId + 1;
    nextId++;
    const newCat = {id, name, stage, breed, gender, avatar};
    cats.push(newCat);
    res.json(newCat);
    }
    catch{res.status(404).send("Không thêm được vì đã xuất hiện lỗi")}
})
app.put("/cats/:id", (req, res) =>{
    try{
        const id = req.params.id;
        const {name , breed, avatar, stage, gender} = req.body;
        const catArrayIndex = cats.findIndex((cat) => id == cat.id);
        if (catArrayIndex === -1) {
            res.status(404).send("Không có con mèo này");
          } else{
        const updatedCat = {
            id : id,
            name : name || cats[catArrayIndex].name,
            breed : breed || cats[catArrayIndex].breed,
            avatar :avatar || cats[catArrayIndex].avatar,
            stage : stage || cats[catArrayIndex].stage,
            gender : gender || cats[catArrayIndex].gender
        }
        cats[catArrayIndex] = updatedCat;
        res.json(updatedCat);
    }
    }
    catch {
        res.status(404).send("Đã có lỗi trong quá trình sửa lỗi");
    }
})
app.delete("/cats/:id", (req, res) => {
    const id = req.params.id;
    const catArrayIndex = cats.find((cat) => cat.id == id);
    if (catArrayIndex < 0) {
        res.status(404).send("Chú mèo này chưa từng tồn tại!");
    } else{
        cats.splice(catArrayIndex,1);
        res.status(200).send("Đã xoá được chú mèo này thành công!");
    }
})