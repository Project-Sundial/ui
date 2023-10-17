const generateCurl = (endpoint_key) => {
  return `curl <SERVER URL>/endpoint/${endpoint_key} ; <COMMAND> ` +
    `&& curl <SERVER URL>/endpoint/${endpoint_key}`;
};

export default generateCurl;