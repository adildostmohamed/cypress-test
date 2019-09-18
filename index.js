const cypress = require('cypress')

cypress.run({
  spec: './cypress/integration/heap_demo.spec.js'
})
.then((results) => {
  console.log(results)
})
.catch((err) => {
  console.error(err)
})