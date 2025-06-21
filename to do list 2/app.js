const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const itemsSchema = {
  name: String,
};

const Item = mongoose.model("Item", itemsSchema);

const listSchema = {
  name: String,
  items: [itemsSchema],
};

const List = mongoose.model("List", listSchema);

app.get("/", async (req, res) => {
  try {
    const foundItems = await Item.find({});
    res.render("list", { listTitle: "To Do List", newListItems: foundItems });
  } catch (err) {
    console.error(err);
  }
});

app.post("/", async (req, res) => {
  const itemName = req.body.newItem;
  
  const item = new Item({ name: itemName });

  try {
    await item.save();
    res.redirect("/");
  } catch (err) {
    console.error(err);
  }
});

app.post("/delete", async (req, res) => {
  const checkedItemId = req.body.checkbox;

  try {
    await Item.findByIdAndDelete(checkedItemId);
    console.log("Successfully deleted the checked item.");
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.redirect("/");
  }
});

app.listen(3000, function () {
  console.log("Server has started on port 3000 successfully");
});