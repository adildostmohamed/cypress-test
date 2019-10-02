const path = require('path');
const cypress = require('cypress');
const constants = require('../utils/constants');
const { handleRunCompletion } = require('../utils/handle_run_completion');
const {
  interactions: { VIEW_ARTIST }
} = constants;

const pathToSpec = path.join(
  './cypress',
  'integration',
  'visit_artist_page.spec.js'
);

const visitArtistPageTrigger = () => {
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
      handleRunCompletion(VIEW_ARTIST, results);
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = visitArtistPageTrigger;
