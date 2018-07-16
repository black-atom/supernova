test-database:
	@docker-compose up -d test-database
.PHONY: test-database

test-setup-database:
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:create --debug true --config src/config/database/configObject.js --env test" test-server
.PHONY: test-setup-database

run-test-migrations:
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:migrate --debug true --config src/config/database/configObject.js --env test --migrations-path src/database/migrations" test-server
.PHONY: test-setup-database

undo-test-migration:
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:migrate:undo --debug true --config src/config/database/configObject.js --env test --migrations-path src/database/migrations" test-server
.PHONY: test-setup-database

test: run-test-migrations
	@docker-compose up test-server
.PHONY: test

development:
	@docker-compose up development-server
.PHONY: test