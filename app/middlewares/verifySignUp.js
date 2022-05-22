import Role from "../models/Role.js";
import User from "../models/User.js";

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
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

export const checkRolesExisted = async (req, res, next) => {
  const roles = await Role.find({}).select("-_id -__v");

  const arrayRole = roles.map((u) => u.name);

  if (req.body.roles) {
    for (let i = 0; i < arrayRole.length; i++) {
      if (arrayRole[i] === req.body.roles[0]) {
        next();
        return;
      }
    }
    res.status(400).json({
      message: `Failed! Role does not exist!`,
    });
    return;
  }
};
