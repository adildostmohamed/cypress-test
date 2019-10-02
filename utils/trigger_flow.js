const axios = require('axios');
const constants = require('./constants');
const {
  flow: { FLOW_ENDPOINT }
} = constants;

const triggerFlow = (
  startTime,
  interactionName,
  interactionCount,
  status,
  tableName,
  duration
) => {
  const flowBody = {
    startTime,
    interactionName,
    interactionCount,
    status,
    tableName,
    duration
  };
  try {
    axios
      .post(FLOW_ENDPOINT, flowBody)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    console.error(error);
  }
};

module.exports = triggerFlow;
