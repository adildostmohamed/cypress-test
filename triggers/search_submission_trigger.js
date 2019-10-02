const path = require('path');
const cypress = require('cypress');
const { handleRunCompletion } = require('../utils/handle_run_completion');
const constants = require('../utils/constants');
const {
  interactions: { SEARCH_SUBMISSION }
} = constants;

const pathToSpec = path.join(
  './cypress',
  'integration',
  'search_submission.spec.js'
);

const searchSubmissionTrigger = () => {
  return cypress
    .run({
      spec: pathToSpec,
      config: {
        projectId: '56xjvw',
        video: false
      },
      key: '808cba80-9c99-4a41-bdbf-5953f1406ef7'
      // record: true
    })
    .then(results => {
      handleRunCompletion(SEARCH_SUBMISSION, results);
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = searchSubmissionTrigger;
