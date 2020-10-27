export const transformRequest = (url) => {
  const hasQuery = url.indexOf('?') !== -1;
  const suffix = hasQuery
    ? '&pluginName=journalismScrollytelling'
    : '?pluginName=journalismScrollytelling';
  return {
    url: url + suffix
  };
};
