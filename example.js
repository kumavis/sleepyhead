const Ohayo = require('./index')

const ohayo = new Ohayo()
ohayo.on('woke', () => {
  console.log('computer woke from sleep')
})

// force process awake for example purposes
setInterval(function(){}, Number.POSITIVE_INFINITY)