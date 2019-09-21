
<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">Sample App for @nestjsplus/knex</h3>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="License" />
    <img src="https://badge.fury.io/js/%40nestjsplus%2Fknex.svg" alt="npm version" height="18">    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>

### What?

This is a standalone sample app showing how to use the [@nestjsplus/knex](https://github.com/nestjsplus/knex) package for integrating [Knex.js](http://knexjs.org) with [Nest](https://nestjs.com).

You can clone and install it, and examine the source code to learn how to use the package.

The `src/app.controller.ts` file and `src/app.service.ts` files also demonstrate how to use a few basic Knex.js features.

### Installation

> git clone https://github.com/nestjsplus/knex-cats

Creates a folder called `knex-cats`

> cd knex-cats

#### Supply credentials

This example assumes you have a PostgreSQL installation available. You'll need to add the PostgreSQL database credentials.

The example uses [NestJS Configuration Manager](https://github.com/nestjsplus/config) to supply environment variables to the app. It's set up to expect a `development.env` file in a folder called `config` at the root level (a sibling to `src`).  (You can change any of these settings, or use more features of *NestJS Configuration Manager* by reading the docs, or hard code your credentials, or use another config manager, etc.).

The `development.env` file should look like this:

```
host=<localhost, or IP address of your PostgreSQL server>
port=<port PostgreSQL listens on>
database=<database name>
user=<database user>
password=<database password>
```

#### Install dependencies and run

> npm install

> npm run start:dev

See [the docs](https://github.com/nestjsplus/knex) for more.

### Change Log

See [Changelog](CHANGELOG.md) for more information.

### Contributing

Contributions welcome! See [Contributing](CONTRIBUTING.md).

### Author

**John Biundo (Y Prospect on [Discord](https://discord.gg/G7Qnnhy))**

### License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
