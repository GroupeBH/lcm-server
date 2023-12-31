const Position = require("../../models").Position;

const getPositions = async (req, res) => {
  const positions = await Position.findAll();
  console.log("positions : ", positions);
  try {
    if (positions.length > 0) {
      res.status(200).json({ message: "success", positions });
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getPositions,
};
