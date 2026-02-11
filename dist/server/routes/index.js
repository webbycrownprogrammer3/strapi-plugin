"use strict";

/**
 * Plugin routes
 *
 * Content API routes are mounted at /api/strapi-plugin-api-deep-populate by Strapi.
 */

module.exports = [
  {
    method: "GET",
    path: "/settings",
    handler: "plugin::strapi-plugin-api-deep-populate.populate.getSettings",
    config: {
      auth: false, // for now; later you can secure with permissions / auth
    },
  },
  {
    method: "POST",
    path: "/settings",
    handler: "plugin::strapi-plugin-api-deep-populate.populate.setSettings",
    config: {
      auth: false,
    },
  },
];

