const {
  NODE_ENV,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;

exports.onCreateWebpackConfig = ({
  plugins,
  actions
}) => {
  const { setWebpackConfig } = actions;

  setWebpackConfig({
    plugins: [
      plugins.define({
        "process.env.NETLIFY_ENV": JSON.stringify(NETLIFY_ENV)
      })
    ]
  });
};
