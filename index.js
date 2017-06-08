const EventEmitter = require('events')

class Ohayo extends EventEmitter {

  constructor(opts = {}){
    // set parameters
    this.tick = opts.tick || 1000
    this.timeout = opts.timeout || this.tick * 3
    this.start()
  }

  function start () {
    // clear any previously running interval
    this.stop()
    // start interval
    this.lastTick = Date.now()
    this.intervalId = setInterval(() => this._runClock(), this.tick)
    // unreference the timer so that the program can close
    if (this.intervalId.unref) this.intervalId.unref()
  }

  function stop () {
    // stop the active interval
    clearInterval(this.intervalId)
  }

  function _runClock () {
    const now = Date.now()
    const duration = now - this.lastTick
    if (duration > this.timeout) {
      this.emit('woke')
    }
    this.lastTick = now
  }

}

module.exports = Ohayo