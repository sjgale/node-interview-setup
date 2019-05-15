# node-interview-setup
An overly simple express app, used for pairing with node candidates during interviews.

After cloning this repo, run `npm i` to install any dependencies. An few simple routes are set up in `index.js`, with tests in  `index.spec.js`.

To run tests, run `npm test` or `npm test-watch`.
To start the express app run `node start`.

Some possible pairing ideas:
* Add additional endpoints for other functions, like subtract or multiply.
* Add some form of caching for requests (in memory, redis, postgres).
* Improve the environment with hot reloading, typescript, or some other useful refactor.
* Serve up HTML instead of just JSON from an endpoint.
