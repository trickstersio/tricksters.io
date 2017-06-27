const nextBabelPreset = require('next/babel');

// ussue     https://github.com/styled-components/styled-components/issues/934
// solution  https://github.com/styled-components/styled-components/issues/934#issuecomment-310840909

nextBabelPreset.plugins = nextBabelPreset.plugins.filter(plugin => {
  return !Array.isArray(plugin) && plugin.indexOf('styled-jsx/babel') === -1;
});

module.exports = nextBabelPreset;
