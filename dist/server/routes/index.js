"use strict";

module.exports = {
  type: "admin", // This tells Strapi these are Admin Panel routes
  routes: [
    {
      method: "GET",
      path: "/settings",
      handler: "populate.getSettings",
      config: {
        auth: false, // Set to false for testing, then use admin permissions
      },
    },
    {
      method: "PUT",
      path: "/settings",
      handler: "populate.setSettings",
      config: {
        auth: false,
      },
    },
  ],
};
