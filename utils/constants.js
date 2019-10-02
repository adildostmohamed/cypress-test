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
    SLACK_WEBHOOK_URL:
      'https://hooks.slack.com/services/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',
    SUCCESS_STRING: 'SUCCESS',
    FAILED_STRING: 'FAILED'
  },
  flow: {
    FLOW_ENDPOINT:
      'https://prod-21.uksouth.logic.azure.com:443/workflows/0830a0a634934565b0dedf69a3634333/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OvdAGF0dIP4frvc3SYaTQp2uIl7gx8vDEj84CCQVCV0'
  }
};

module.exports = constants;
