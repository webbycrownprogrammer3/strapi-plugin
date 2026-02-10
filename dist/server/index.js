'use strict';

const routes = require('./routes');

module.exports = {
  register({ strapi }) {
    // Register any server-side logic here if needed
  },

  bootstrap({ strapi }) {
    // Bootstrap any server-side logic here if needed
  },
  routes,
};
