const cypress = require('cypress');
const cron = require('node-cron');

const cypress_trigger = () => {
  return cypress
    .run({
      spec: './cypress/integration/heap_demo.spec.js',
      config: {
        projectId: '56xjvw',
        video: false
      },
      key: '808cba80-9c99-4a41-bdbf-5953f1406ef7',
      record: true
    })
    .then(results => {
      console.log(results);
    })
    .catch(err => {
      console.error(err);
    });
};

cron.schedule('*/2 * * * *', () => {
  console.log('TIME TO RUN!');
  cypress_trigger();
});
