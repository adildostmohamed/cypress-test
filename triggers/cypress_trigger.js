const cypress = require('cypress');
const { sendSlackSuccessMessage } = require('./send-slack-message');

const cypress_trigger = (pathToTest, testName) => {
  return cypress
    .run({
      spec: pathToTest,
      config: {
        projectId: '56xjvw',
        video: false
      },
      key: '808cba80-9c99-4a41-bdbf-5953f1406ef7'
      // record: true
    })
    .then(results => {
      const { startedTestsAt, totalDuration, totalTests, runUrl } = results;
      sendSlackSuccessMessage(
        testName,
        startedTestsAt,
        totalDuration,
        totalTests,
        runUrl
      );
      console.log(results);
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = cypress_trigger;
