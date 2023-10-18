const generateCurl = (monitor) => {
  const { schedule, command, endpoint_key} = monitor;

  return schedule + ' ' + command +
    ` && curl <SERVER URL>/pings/${endpoint_key}`;
};

export default generateCurl;
