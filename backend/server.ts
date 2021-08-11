
import http from 'http'
import {Application} from "express"
import {Server} from "http"
import {AddressInfo} from "net"

const app: Application = require('./app')

//Normalize port
const normalizePort = val => {
  const port: number = parseInt(val, 10)
  if (isNaN(port)) return val
  if (port >= 0) return port
  return false
}
const port: number = normalizePort(process.env.PORT || '3000')
app.set('port', port)


//Error handler
const errorHandler = error => {
  if (error.syscall !== 'listen') throw error
  const address: string | AddressInfo = server.address()
  const bind = typeof address === 'string'
    ? 'pipe ' + address
    : 'port: ' + port
  switch (error.code) {
    case 'EACCES':
      console.error(String.fromCodePoint(0x26D4),`${bind} requires elevated privileges.`)
      process.exit(1)
      break;
    case 'EADDRINUSE':
      console.error(String.fromCodePoint(0x26D4),`${bind}  is already in use.`)
      process.exit(1)
      break;
    default:
      throw error
  }
}

//Launching server
const server: Server = http.createServer(app)
server.on('error', errorHandler)
server.on('listening', (): void => {
  const address = server.address()
  const bind = typeof address === 'string'
    ? `pipe ${address}`
    : `port ${port}`
  console.log(String.fromCodePoint(0x1F4DE), `Node server listening on ${bind}`)

})

server.listen(port)