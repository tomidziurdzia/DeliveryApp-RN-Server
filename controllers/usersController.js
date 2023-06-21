import User from "../models/user.js";

const register = (req, res) => {
  const user = req.body;
  User.create(user, (err, data) => {
    if (err) {
      return res.status(501).json({
        success: false,
        message: "Hubo un error con el registro del usuario",
        error: err,
      });
    }

    return res.status(201).json({
      success: true,
      message: "El registro se realizo correctamente",
      data,
    });
  });
};

export { register };
