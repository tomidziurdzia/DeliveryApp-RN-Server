import db from "../config/config.js";

const User = {};

User.create = (user, result) => {
  const sql = `
    INSERT INTO users(
        email,
        name,
        lastname,
        phone,
        image,
        password,
        created_at,
        updated_at
    )
    VALUES(?, ?, ?, ?, ?, ?, ?, ?)
    `;

  db.query(
    sql,
    [
      user.email,
      user.name,
      user.lastname,
      user.phone,
      user.image,
      user.password,
      new Date(),
      new Date(),
    ],
    (err, res) => {
      if (err) {
        console.error("Error al ejecutar la consulta: ", err);
        result(err, null);
        return;
      }
      console.log("Id del usuario: ", res.insertId);
      result(null, res.insertId);
    }
  );
};

export default User;
