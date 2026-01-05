const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema(
  {
    referenceId: {
      type: String,
      required: true,
      unique: true,
    },

    incidentType: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    dateTime: {
      type: Date,
      required: true,
    },

    accusedName: {
      type: String,
      default: "",
    },

    accusedDetails: {
      type: String,
      default: "",
    },

    isAnonymous: {
      type: Boolean,
      default: false,
    },

    reportedBy: {
      name: String,
      email: String,
      role: String,
    },

    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Incident", incidentSchema);
