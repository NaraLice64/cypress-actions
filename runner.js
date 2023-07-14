const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImQzZDhjNDFiLTBkZjUtNDU0OC1iYzk0LTk3NGIxNjNmZGY1Zi0xNjg5Mjk1MDUxNjM0IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZTA1ZGRkYWMtNmIyNy00ZjlmLWJlNjctNWZhYTIzMmRjYmMzIiwidHlwZSI6InQifQ.EsGf3NVUKAhos2MwwRnK3f4nBVlGmUaP9bnqGJQzi5k'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
