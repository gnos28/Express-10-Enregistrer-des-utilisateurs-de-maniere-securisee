const User = require("./models/user");

User.verifyPassword(
  "myWrongPlainPassword",
  "$argon2id$v=19$m=65536,t=5,p=1$y3xbqNQKGGh1YkNcvs1rjQ$FmPR7obOGNtddas9RzulsKxu83l1zXFOXc5w7ebWXRs"
).then((passwordIsCorrect) => {
  console.log(passwordIsCorrect);
});
