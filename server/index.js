const express = require("express");
const app = express();
const port = 8080;
app.use(express.json());
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
    const id = cats.length + 1;
    const newCat = {id, name, stage, breed, gender, avatar};
    cats.push(newCat);
    res.status(200).send("Đã thêm thành công con mèo có tên " + name);
    }
    catch{res.status(404).send("Không thêm được vì đã xuất hiện lỗi")}
})
