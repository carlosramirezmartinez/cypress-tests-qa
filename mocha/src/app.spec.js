const assert = require('assert');
const { hola } = require('./app.js');

describe('Test función hola', () => {
  it('debería saludar a Mundo si no le pasamos ningún nombre como argumento', () => {
  assert.ok(hola() === 'Hola Mundo');
  })

  it('debería saludar a Carlos si le pasamos Carlos como argumento', () => {
    assert.strictEqual(hola('Carlos'), 'Hola Carlos');
    })
})

//npm test
//npm run test:watch