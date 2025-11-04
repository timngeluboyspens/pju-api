const { createPju, getAllPju } = require('../services/pjuService');

const createPjuController = async (req, res) => {
  try {
    const { id, name, description, address, lat, longitude } = req.body;
    const data = { id, name, description, address, lat, longitude };
    const result = await createPju(data);
    return res.status(201).json({
      success: true,
      message: 'PJU created successfully',
      data: result,
      error_details: null,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
      data: null,
      error_details: null,
    });
  }
};

const getPjuListController = async (req, res) => {
  try {
    const pjus = await getAllPju();

    return res.status(200).json({
      success: true,
      message: 'PJU list retrieved successfully',
      data: pjus,
      error_details: null,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
      data: null,
      error_details: null,
    });
  }
};

module.exports = {
  createPjuController,
  getPjuListController,
};
