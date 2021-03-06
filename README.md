# Bugs Money

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9466d85ecda34baf88bf4172bba03640)](https://app.codacy.com/app/jseb2520/bugs-money?utm_source=github.com&utm_medium=referral&utm_content=andresfelipe9619/bugs-money&utm_campaign=Badge_Grade_Dashboard)

> The System will manage the Financial processes that any person can take, having as base the management of accounts and budget. Can record the movement of your accounts and relate them to your budgets, to generate a consolidated view of your financial status.

[![NPM Version][npm-image]][npm-url]

[![Build Status][travis-image]][travis-url]

[![Downloads Stats][npm-downloads]][npm-url]

![](header.png)

## Development setup

We are using Docker, so you just have to compose the containers and access the server by docker machine ip (http://192.168.99.100) and the respective ports (3000 for the client and 5000 for the server ).

```sh
docker-compose build

docker-compose up
```

## Contributing

We follow the [feature branch](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) workflow.

Clone it (<https://github.com/andresfelipe9619/bugs-money/>)

1. Create your branch (`git checkout -b fooBar`)
2. Commit your changes (`git commit -am 'Add some fooBar'`)
3. Push to the branch (`git push origin fooBar`)
4. Create a new Pull Request

<!-- Markdown link & img dfn's -->

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki

## Built with:

- Docker
- React js
- Node js
- Redux
- Nivo
- Express
- MongoDB
- Semantic UI
