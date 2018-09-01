database:
	@docker-compose up -d database
.PHONY: test-database

setup-test-database: database
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:create --env test" server-test
.PHONY: setup-test-database

run-test-migration: database
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:migrate --debug true --env test" server-test
.PHONY: run-test-migration

run-seeds: database
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:seed:all --debug true --env test" server-test
.PHONY: run-seeds

undo-seeds: database
	@docker-compose run --rm --entrypoint="nnode_modules/.bin/sequelize db:seed:undo:all --debug true --env test" server-test
.PHONY: undo-seeds

undo-test-migration: database
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:migrate:undo --debug true --env test" server-test
.PHONY: test-setup-database

undo-all-test-migration: database
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:migrate:undo:all --debug true --env test" server-test
.PHONY: test-setup-database

server-test: database
	@docker-compose up server-test
.PHONY: test-server

test:
	@docker-compose run --rm --entrypoint="yarn test" server-test
.PHONY: test