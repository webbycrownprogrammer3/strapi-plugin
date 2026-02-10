"use strict";

/**
 * Plugin routes
 *
 * These routes will be mounted under /strapi-plugin-api-deep-populate by Strapi.
 */

module.exports = [
  {
    method: "GET",
    path: "/settings",
    handler: "populate.getSettings",
    config: {
      auth: false, // for now; later you can secure with permissions / auth
    },
  },
  {
    method: "POST",
    path: "/settings",
    handler: "populate.setSettings",
    config: {
      auth: false,
    },
  },
];

