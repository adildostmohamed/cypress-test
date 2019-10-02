require('dotenv').config();
const cron = require('node-cron');
const searchSubmissionTrigger = require('./triggers/search_submission_trigger');
const visitArtistPageTrigger = require('./triggers/visit_artist_page_trigger');

// const searchSubmissionSpec = path.join(
//   './cypress',
//   'integration',
//   'search_submission.spec.js'
// );
// const searchSubmissionTestName = 'Search Submission';
// const searchSubmissionTest = cypress_trigger(
//   searchSubmissionSpec,
//   searchSubmissionTestName
// );

// cron.schedule('*/2 * * * *', () => {
//   console.log('TIME TO RUN!');
//   searchSubmissionTrigger();
//   visitArtistPageTrigger();
// });

searchSubmissionTrigger();
visitArtistPageTrigger();
