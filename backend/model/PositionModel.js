const mongoose = require("mongoose");
const { PositionSchema } = require("../schemas/PositionSchema.js");

const PositionModel = mongoose.model("Position", PositionSchema);

module.exports = { PositionModel };