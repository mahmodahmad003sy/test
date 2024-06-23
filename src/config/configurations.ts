export default () => {
  const env =
    process.env.ENV_NAME == 'dev'
      ? require('./config-dev')
      : require('./config-prod');

  return env.default();
};
