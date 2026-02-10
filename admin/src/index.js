import { Initializer } from './components/Initializer';
import { PluginIcon } from './components/PluginIcon';

export default {
  register(app) {
    // ✅ Register plugin
    app.registerPlugin({
      id: 'hello-plugin',
      name: 'Hello Plugin',
      initializer: Initializer,
      isReady: false,
    });

    // ✅ Add settings link (Strapi v5 way)
    app.addSettingsLink({
      sectionId: 'global', // 🔥 REQUIRED
      id: 'hello-plugin',
      intlLabel: {
        id: 'hello-plugin.name',
        defaultMessage: 'Hello Plugin',
      },
      to: '/settings/hello-plugin',
      Component: async () => {
        const component = await import('./pages/Settings');
        return component.default;
      },
      permissions: [],
    });
  },

  bootstrap() {},
};
