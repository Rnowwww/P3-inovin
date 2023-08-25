require("dotenv").config();

const app = require("./src/app");

const port = parseInt(process.env.PORT ?? "4242", 10) || 3000;

app.listen(port, "0.0.0.0", (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});
