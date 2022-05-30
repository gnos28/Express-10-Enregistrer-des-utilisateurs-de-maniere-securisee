const authRouter = require("express").Router();
const User = require("../models/user");

authRouter.post("/checkCredentials", (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email)
    .then((answer) => {
      if (!answer) throw new Error("Email not found");

      User.verifyPassword(password, answer.hashedPassword).then(
        (passwordIsCorrect) => {
          if (passwordIsCorrect) res.status(200).send(`Hackeur !!`);
          else res.status(401).send(`Essaye encore xD`);
        }
      );
    })
    .catch((err) => {
      //   console.log("inside catch !!!", err);
      res.status(404).send(`User with email ${email} not found.`);
    });
});

module.exports = authRouter;
