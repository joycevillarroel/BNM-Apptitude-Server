module.exports = app => {
    const controller = require('../controllers/metricsList')();
  
    app.route('/api/v1/metrics-list')
      .get(controller.listMetrics);
  }