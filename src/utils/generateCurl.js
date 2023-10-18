const generateCurl = (endpoint_key) => {
  return `<COMMAND> ` +
    `&& curl <SERVER URL>/pings/${endpoint_key}`;
};

export default generateCurl;
