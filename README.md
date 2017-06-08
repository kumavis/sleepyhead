# ohayo

Good morning sleepy head! This module is an event emitter that emits 'woke' when your computer wakes up from sleep.

```
npm install --save ohayo
```

## Usage

``` js
const Ohayo = require('ohayo')

const ohayo = new Ohayo({ tick: 10*1e3, timeout: 100*1e3 })
ohayo.on('woke', () => {
  console.log('ohayo gozaimasu!')
})
```

## Credits

based on

- [@mafintosh](https://github.com/mafintosh)'s [on-wake-up](https://github.com/mafintosh/on-wake-up)

- [@pfraze](https://github.com/pfraze)'s [on-wakeup](https://github.com/pfraze/on-wakeup)

## License

MIT
