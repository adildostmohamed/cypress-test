const axios = require('axios');
const constants = require('./constants');
const {
  slack: { SLACK_WEBHOOK_URL, SUCCESS_STRING }
} = constants;

const setMessageTitle = (runStatus, interactionName) => {
  let messageTitle;
  const successTitle = `:+1: Test run for ${interactionName} completed successfully`;
  const failedTitle = `:disappointed: Test run for ${interactionName} failed`;
  runStatus === SUCCESS_STRING
    ? (messageTitle = successTitle)
    : (messageTitle = failedTitle);
  return messageTitle;
};

const sendSlackStatusMessage = (
  runStatus,
  interactionName,
  formattedTestStartTime,
  formattedDuration,
  totalTests,
  runUrl
) => {
  const messageTitle = setMessageTitle(runStatus, interactionName);
  const messageColor = runStatus === SUCCESS_STRING ? 'good' : 'danger';
  const slackMessageBody = {
    text: messageTitle,
    attachments: [
      {
        fallback: messageTitle,
        color: messageColor,
        title: 'View details of run',
        title_link: runUrl,
        fields: [
          {
            title: 'Interaction Name',
            value: interactionName,
            short: false
          },
          {
            title: 'Number of interactions',
            value: totalTests,
            short: false
          },
          {
            title: 'Started',
            value: formattedTestStartTime,
            short: false
          },
          {
            title: 'Time taken',
            value: formattedDuration,
            short: false
          }
        ]
      }
    ]
  };
  return sendSlackMessage(slackMessageBody);
};

const sendSlackMessage = slackMessageBody => {
  try {
    axios
      .post(SLACK_WEBHOOK_URL, slackMessageBody)
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

module.exports = {
  sendSlackStatusMessage,
  sendSlackMessage
};
