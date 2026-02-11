module.exports = [
  {
    method: "GET",
    path: "/settings",
    handler: "populate.getSettings", // Use short name: controllerName.actionName
    config: {
      auth: false,
    },
  },
  {
    method: "POST", // Your React page uses .put(), but your route says .POST()
    path: "/settings",
    handler: "populate.setSettings",
    config: {
      auth: false,
    },
  },
];