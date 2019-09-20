const cypress = require('cypress');

cypress
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
