const tape = require('tape')
const jsonist = require('jsonist')

const PORT = process.env.PORT = process.env.PORT || require('get-PORT-sync')()
const server = require('./server')

const urlBase = `http://localhost:${PORT}`

tape('should respond hello', (t) => {
  jsonist.get(urlBase, (err, body) => {
    if (err) t.error(err)

    t.equal(body.msg, 'hello')
    t.end()
  })
})

tape('should respond with user-agent', (t) => {
  jsonist.get(`${urlBase}/user-agent`, (err, body) => {
    if (err) t.error(err)
    t.ok(body.userAgent)
    t.end()
  })
})

tape('cleanup', function (t) {
  server.close()
  t.end()
})
