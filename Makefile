database:
	@docker-compose up -d database
.PHONY: test-database

setup-test-database: database
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:create --env test" server
.PHONY: setup-test-database

run-test-migration: database
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:migrate --debug true --env test" server
.PHONY: run-test-migration

undo-test-migration: database
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:migrate:undo --debug true --env test" server
.PHONY: test-setup-database

undo-all-test-migration: database
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:migrate:undo:all --debug true --env test" server
.PHONY: test-setup-database

server: database
	@docker-compose up server
.PHONY: server

server-background: database
	@docker-compose up -d server
.PHONY: server-background

setup: run-test-migration
.PHONY: setup

test: server-background
	@docker-compose run --rm --entrypoint="yarn test" server
.PHONY: test

down:
	@docker-compose down
.PHONY: down