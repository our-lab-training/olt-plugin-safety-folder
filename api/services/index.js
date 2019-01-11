const binders = require('./trainings/binders.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(binders);
};
