const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nominatorSchema = new Schema({
  userName: { type: String, required: true },
  nominees: { type: Array}
});

const Nominator = mongoose.model("Nominator", nominatorSchema);

module.exports = Nominator;
