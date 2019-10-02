const constants = {
  interactions: {
    SEARCH_SUBMISSION: {
      name: 'Search Submission',
      table: 'searchSubmitTable'
    },
    VIEW_ARTIST: {
      name: 'View Artist Page',
      table: 'artistNameTable'
    }
  },
  slack: {
    SLACK_WEBHOOK_URL: process.env.SLACK_WEBHOOK_URL,
    SUCCESS_STRING: 'SUCCESS',
    FAILED_STRING: 'FAILED'
  },
  flow: {
    FLOW_ENDPOINT: process.env.FLOW_ENDPOINT
  }
};

module.exports = constants;
