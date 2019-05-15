# node-interview-setup
An overly simple express app, used for pairing with node candidates during interviews.

After cloning this repo, run `npm i` to install any dependencies. An few simple routes are set up in `index.js`, with tests in  `index.spec.js`.

To run tests, run `npm test` or `npm test-watch`.
To start the express app run `node start`.

Some possible pairing ideas:
* Add additional endpoints to the existing API, like subtract or multiply.
* Build out a new API using something like the Star Wars API.
* Add some form of caching for requests (in-memory, redis, or postgres).
* Improve the environment with hot reloading or typescript.
* Refactor part of the code (seperate functions into another file.)
* Add authentication.
* Improve the test suite to cover other possible scenarios (bad request body, etc).
* Serve up HTML instead of just JSON from an endpoint.
