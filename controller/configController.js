const { createConfig, getAllConfigs } = require('../services/configService');

const createConfigController = async (req, res) => {
  try {
    const { name, value, pju_id } = req.body;
    const data = { name, value, pju_id };
    const result = await createConfig(data);
    return res.status(201).json({
      success: true,
      message: 'Config created successfully',
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

const getConfigListController = async (req, res) => {
  try {
    const configs = await getAllConfigs();

    return res.status(200).json({
      success: true,
      message: 'Config list retrieved successfully',
      data: configs,
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
  createConfigController,
  getConfigListController,
};
