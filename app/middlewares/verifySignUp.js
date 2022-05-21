import User from "../models/User.js";

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  await User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(400).send({ message: "Failed! Email is already in use!" });
      return;
    }
    next();
  });
};

export default checkDuplicateUsernameOrEmail;
