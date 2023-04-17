module.exports = () => {
    const customerMetricsDB = require('../data/customerMetricsList.json');
    const controller = {};
  
    controller.listMetrics = (req, res) => res.status(200).json(customerMetricsDB);
  
    return controller;
  }