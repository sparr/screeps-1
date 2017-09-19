const {ScreepsAPI} = require('screeps-api');

const api = new ScreepsAPI({
  email: 'TooAngel',
  password: 'tooangel',
  protocol: 'http',
  hostname: 'localhost',
  port: 21025,
  path: '/',
});

async function main() {
  await api.auth();

  api.socket.connect();
  api.socket.on('connected', ()=>{});
  api.socket.on('auth', (event)=>{});

  api.socket.subscribe('console', (event)=>{
    if (event.data.messages.results.length > 0) {
      console.log('result', event.data.messages.results);
    }

    if (event.data.messages.log.length > 0) {
      for (log in event.data.messages.log) {
        console.log(event.data.messages.log[log]);
      }
    }
  })
};

main();
