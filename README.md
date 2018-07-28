# Supernova
[![CircleCI](https://circleci.com/gh/black-atom/supernova.svg?style=svg)](https://circleci.com/gh/black-atom/supernova)
[![codecov](https://codecov.io/gh/black-atom/supernova/branch/master/graph/badge.svg)](https://codecov.io/gh/black-atom/supernova)

## Table of Contents
- [Introduction](#introduction)
- [Technology](#technology)
  - [Background](#backgroud)
- [Getting Started](#getting-started)
  - [Running Development Server](#running-development-server)
  - [Running Tests](#running-tests)

## Introduction
Supernova digitizes what today is done with excel sheets.

### Backgroud
Even nowadays, many companies still rely on old technologies in order to store their call center, technical assistance, and field work information. Most of these companies use excel sheets. Therefore, there is a big oppoturnity to digitalize their information and help them to have a better managment of their processes.

## Technology
- **[Docker](https://docs.docker.com)** and **[Docker Compose](https://docs.docker.com/compose/)** to create our development and test environments.
- **[CircleCI](https://circleci.com)** as a general CI.
- **[Postgres](https://www.postgresql.org)** to store our data and **[Sequelize](http://docs.sequelizejs.com)** as a Node.js ORM.
- **[Ava](https://github.com/avajs/ava)** as a framework for tests.
- **[Yarn](https://yarnpkg.com/en/)** as a package manager.

## Getting Started
To get started, you should install **Docker** and **Docker Compose**.

Then, clone the repository:
```sh
$ git clone git@github.com:black-atom/supernova.git
```

There are 3 default .env files. You can change them according to your needs..

## Running Development Server
To run locally, simply do the following command:
```sh
$ make development
```
This will start the development server listening on port 3000.

## Running Tests
To run our tests, do:
```sh
$ make test
```
This will run both e2e and unit tests


