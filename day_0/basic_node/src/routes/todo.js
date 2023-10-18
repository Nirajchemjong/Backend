const express = require("express");
const router = express.Router();

//POST, PUT, PATCH, DELETE, GET

//CURD  operation on TODO list
let todo = [
  {
    id: 1,
    todo: "cooking",
    due: "2024",
  },
  {
    id: 2,
    todo: "i am niraj",
    due: "2024",
  },
];

router.post("/todo", (req, res) => {
  const body = req.body;
  todo.push(body);
  console.log("body", body);
  res.send({
    status: "Added to TODO list",
  });
});

router.get("/todo", (req, res) => {
  res.send(todo);
});

//update {PUT}
let todoPut = [
  {
    id: 1,
    todo: "updated successfully",
  },
];

router.put("/todo/:id", (req, res) => {
  const { id } = req.params;
  const BodyTodo = req.body;

  todo = todo.map((item) => {
    if (item.id == id) {
      console.log("hello");
      return {
        ...item,
        ...todoPut[0],
      };
    }
    return item;
  });

  res.send({ status: "Successfully update" });
});

//Patch
router.patch("/todo/:id", (req, res) => {
  const { id } = req.params;
  const BodyTodo = req.body;

  todo = todo.map((item) => {
    if (item.id == id) {
      console.log("hello");
      return {
        ...item,
        ...todoPut[0],
      };
    }
    return item;
  });

  res.send({ status: "Successfully update" });
});
//delete

router.delete("/todo/:id", (req, res) => {
  const { id } = req.params;

  todo = todo.filter((item) => item.id != id);

  res.send({
    status: "Successfully deleted",
  });
});

module.exports = router;
