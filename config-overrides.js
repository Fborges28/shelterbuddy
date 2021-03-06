const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@/domain': 'src/domain',
    '@/infrastructure': 'src/infrastructure',
    '@/routes': 'src/routes',
    '@/services': 'src/services',
    '@/utils': 'src/utils',
    '@/shared': 'src/shared'
  })(config);

  return config;
};
