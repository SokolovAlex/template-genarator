function generateConfig() {
  if (process.env.areas && (process.env.areas === 'all' || process.env.areas === 'locator')) {
    return [
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: `${__dirname}/pages`,
        },
      },
    ];
  }
  return [];
}

const config = generateConfig();

module.exports = config;
