const AbstractManager = require("./AbstractManager");

class ProfileTasteManager extends AbstractManager {
  constructor() {
    super({ table: "taste_profile" });
  }

  insert(tasteProfile) {
    return this.database.query(
      `INSERT into ${this.table} (name, description) values (?, ?)`,
      [tasteProfile.name, tasteProfile.description]
    );
  }

  update(tasteProfile) {
    console.info(tasteProfile.taste_profile_id);
    return this.database.query(
      `update ${this.table} set name = ?, description = ?  where taste_profile_id = ?`,
      [
        tasteProfile.name,
        tasteProfile.description,
        tasteProfile.taste_profile_id,
      ]
    );
  }
}

module.exports = ProfileTasteManager;
