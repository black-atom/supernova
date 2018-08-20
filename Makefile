database:
	@docker-compose up -d database
.PHONY: test-database

setup-test-database: database
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:create --env test" server-test
.PHONY: test-setup-database

run-test-migration: database
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:migrate --debug true --env test" server-test
.PHONY: test-setup-database

undo-test-migration: database
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:migrate:undo --debug true --env test" server-test
.PHONY: test-setup-database

undo-all-test-migration: database
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:migrate:undo:all --debug true --env test" server-test
.PHONY: test-setup-database

server-test:
	@docker-compose up server-test
.PHONY: test-server

server-devopment:
	@docker-compose up development-server
.PHONY: development-server