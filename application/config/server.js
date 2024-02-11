({
  host: '127.0.0.1',
  balancer: 8000,
  protocol: 'http',
  ports: [8001, 8002],
  nagle: false,
  scheduler: false,
  cors: false,
  timeouts: {
    bind: 2000,
    start: 30000,
    stop: 5000,
    request: 5000,
    watch: 1000,
    test: 60000,
  },
  workers: {
    pool: 2,
    wait: 2000,
    timeout: 5000,
  },
  queue: {
    concurrency: 1000,
    size: 2000,
    timeout: 3000,
  },
});

