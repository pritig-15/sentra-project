const Incident = require("../models/Incident");
const generateReferenceId = require("../utils/generateReferenceId");

// ================= CREATE INCIDENT =================
exports.createIncident = async (req, res) => {
  try {
    const {
      incidentType,
      description,
      location,
      dateTime,
      accusedName,
      accusedDetails,
      isAnonymous,
      user,
    } = req.body;

    if (!incidentType || !description || !location || !dateTime) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const referenceId = generateReferenceId();

    const incident = new Incident({
      referenceId,
      incidentType,
      description,
      location,
      dateTime: new Date(dateTime),
      accusedName,
      accusedDetails,
      isAnonymous,
      reportedBy:
        isAnonymous || !user
          ? null
          : {
              name: user.name,
              email: user.email,
              role: user.role,
            },
    });

    await incident.save();

    res.status(201).json({
      message: "Incident submitted successfully",
      referenceId,
    });
  } catch (error) {
    console.error("INCIDENT ERROR:", error);
    res.status(500).json({ message: "Error submitting incident" });
  }
};

// ================= GET ALL INCIDENTS =================
exports.getAllIncidents = async (req, res) => {
  try {
    const incidents = await Incident.find().sort({ createdAt: -1 });
    res.status(200).json(incidents);
  } catch (error) {
    console.error("FETCH ERROR:", error);
    res.status(500).json({ message: "Failed to fetch incidents" });
  }
};
