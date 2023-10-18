const {parse} = require('@datasert/cronjs-parser') ;

const scheduleParser = (scheduleStr) => {
  let returnObj = {valid: null, error:null};
  try {
    parse(scheduleStr);
    returnObj.valid = true;
    return returnObj;
  } catch (err) {
    returnObj.valid = false;
    returnObj.error = err.message;
    return returnObj;
  }
}


module.exports ={scheduleParser};