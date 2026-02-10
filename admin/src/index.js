import { Initializer } from './components/Initializer';
import { PluginIcon } from './components/PluginIcon';
import SettingsPage from './pages/Settings';

export default {
  register(app) {
    app.addSettingsLink('global', {
      id: 'hello-plugin',
      intlLabel: {
        id: 'hello-plugin.name',
        defaultMessage: 'Hello Plugin',
      },
      to: '/settings/hello-plugin',
      Component: SettingsPage,
      permissions: [],
    });

    app.registerPlugin({
      id: 'hello-plugin',
      initializer: Initializer,
      isReady: false,
      name: 'hello-plugin',
    });
  },

  bootstrap(app) {},
};
