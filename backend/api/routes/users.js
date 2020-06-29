const express = require("express");
const bcrypt = require("bcrypt");
const shortid = require("shortid");

const router = express.Router();
const saltRounds = 10;

router.post("/", (req, res) => {

  const password = req.body.password;
  const hashedPassword = bcrypt.hash(password, saltRounds, (err, hash) =>{
      if (err) {
          console.log(err);
      } else {
          console.log(hash);
      }
  });

  const user = {
    id: shortid.generate(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: hashedPassword
  };
  res.status(201).json({
    message: "User has been saved",
    user: user,
  });
});

module.exports = router;
