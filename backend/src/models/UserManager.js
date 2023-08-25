const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  addUser(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, address, zip_code, city, job, hashedPassword, is_admin ) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.address,
        user.zip_code,
        user.city,
        user.job,
        user.hashedPassword,
        user.is_admin,
      ]
    );
  }

  modifyUser(user) {
    return this.database.query(
      `UPDATE ${this.table} SET firstname = ?, lastname = ?, address = ?, zip_code = ?, city = ?, job = ? WHERE user_id = ?`,
      [
        user.firstname,
        user.lastname,
        user.address,
        user.zip_code,
        user.city,
        user.job,
        user.user_id,
      ]
    );
  }

  updateUser(user) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?,   email = ?, address = ?, zip_code = ?, city = ?, job = ?, is_admin = ? where user_id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.address,
        user.zip_code,
        user.city,
        user.job,
        user.is_admin,
        user.user_id,
      ]
    );
  }

  updateAdmin(user) {
    return this.database.query(
      `update ${this.table} set is_admin = ? where user_id = ?`,
      [user.is_admin, user.user_id]
    );
  }

  findUserByEmail(user) {
    return this.database.query(`select * from ${this.table} where email = ?`, [
      user.email,
    ]);
  }
}

module.exports = UserManager;
