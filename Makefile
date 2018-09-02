database:
	@docker-compose up -d database
.PHONY: test-database

setup-test-database: database
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:create --env test" server
.PHONY: setup-test-database

run-test-migration: database
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:migrate --debug true --env test" server
.PHONY: run-test-migration

run-seeds: database
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:seed:all --debug true --env test" server
.PHONY: run-seeds

undo-seeds: database
	@docker-compose run --rm --entrypoint="nnode_modules/.bin/sequelize db:seed:undo:all --debug true --env test" server
.PHONY: undo-seeds

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

test: server-background
	@docker-compose run --rm --entrypoint="yarn test" server
.PHONY: test