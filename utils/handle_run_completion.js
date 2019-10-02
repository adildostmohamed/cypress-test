const constants = require('./constants');
const { sendSlackStatusMessage } = require('./send_slack_message');
const triggerFlow = require('./trigger_flow');
const {
  slack: { SUCCESS_STRING, FAILED_STRING }
} = constants;

const handleRunCompletion = (interaction, results) => {
  const { startedTestsAt, totalDuration, totalTests, runUrl } = results;
  const { name, table } = interaction;
  const formattedTestStartTime = new Date(startedTestsAt).toLocaleString(
    undefined,
    {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
  );
  const formattedDuration = `${Math.floor(totalDuration / 1000)}s`;
  // check results response to see if the run failed based on an error message being present
  if (results.runs[0].error !== null) {
    sendSlackStatusMessage(
      FAILED_STRING,
      name,
      formattedTestStartTime,
      formattedDuration,
      totalTests,
      runUrl
    );
    triggerFlow(
      (startTime = formattedTestStartTime),
      (interactionName = name),
      (interactionCount = totalTests),
      (status = FAILED_STRING),
      (tableName = table),
      (duration = formattedDuration)
    );
  } else {
    sendSlackStatusMessage(
      SUCCESS_STRING,
      name,
      formattedTestStartTime,
      formattedDuration,
      totalTests,
      runUrl
    );
    triggerFlow(
      (startTime = formattedTestStartTime),
      (interactionName = name),
      (interactionCount = totalTests),
      (status = SUCCESS_STRING),
      (tableName = table),
      (duration = formattedDuration)
    );
  }
  console.log(results);
};

module.exports = {
  handleRunCompletion
};
