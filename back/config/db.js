const mongoose = require("mongoose");

//en la terminal inicializo mongo (si ya lo tengo instalado) en linux: sudo service mongod start

const URI = "mongodb://localhost/rentlydb";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(db => console.log("DB is connected"))
  .catch(err => console.error(err));

module.exports = mongoose;
