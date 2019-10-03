require('dotenv').config();
const cron = require('node-cron');

// import all the triggers for the different interactions to execute
const searchSubmissionTrigger = require('./triggers/search_submission_trigger');
const visitArtistPageTrigger = require('./triggers/visit_artist_page_trigger');

// determine how often you want the scheduled trigger to run
cron.schedule('*/2 * * * *', () => {
  console.log('TIME TO RUN!');
  searchSubmissionTrigger();
  visitArtistPageTrigger();
});
