#Better Testing of Microservices Using Consumer-Driven Contracts in Node.js
========

### Accompanying blog post [here](http://hecodes.com/2016/10/better-testing-microservices-using-consumer-driven-contracts-node-js/)

## Installation
Clone repository and run

```
npm install
```

## Usage
Run consumer-side tests

```
mocha app/client/spec/PostServiceClient.spec.js
```

Run provider-side tests

```
node app/service/spec/PostService.spec.js
```

docker run --name pactbroker-db -e POSTGRES_PASSWORD=ThePostgresPassword -e POSTGRES_USER=admin -e PGDATA=/Users/philipbeadle/Projects/elabor8/YOW/pact-data/pgdata -v /Users/philipbeadle/Projects/elabor8/YOW/pact-data:/Users/philipbeadle/Projects/elabor8/YOW/pact-data -d postgres

docker run --name pactbroker --link pactbroker-db:postgres -e PACT_BROKER_DATABASE_USERNAME=pactbrokeruser -e PACT_BROKER_DATABASE_PASSWORD=TheUserPassword -e PACT_BROKER_DATABASE_HOST=postgres -e PACT_BROKER_DATABASE_NAME=pactbroker -d -p 80:80 dius/pact-broker
