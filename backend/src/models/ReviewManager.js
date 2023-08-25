const AbstractManager = require("./AbstractManager");

class ReviewManager extends AbstractManager {
  constructor() {
    super({ table: "review" });
  }

  addReview(review) {
    return this.database.query(
      `insert into ${this.table} (firstName, lastName, email, message, rating ) values (?, ?, ?, ?, ?)`,
      [
        review.firstName,
        review.lastName,
        review.email,
        review.message,
        review.rating,
      ]
    );
  }
}

module.exports = ReviewManager;
