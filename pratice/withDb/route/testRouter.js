const { Router } = require("express");

/* 
starting to write router overhere
*/
const router = Router();
router.get("/", (req, res) => {
  res.send("hello world");
});

let data = [];

router.patch("/", (req, res) => {
  // const data = [];
  const { body } = req;
  // console.log(body);

  data = { ...body };
  // console.log(data);
  res.json({
    status: "success",
    message: " well done niraj ",
    data: data,
  });
});

module.exports = router;
