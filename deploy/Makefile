run-migrations:
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:migrate --debug true --env production" server
.PHONY: run-migrations

run-seeds:
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:seed:all --debug true --env production" server
.PHONY: run-seeds

undo-seeds:
	@docker-compose run --rm --entrypoint="nnode_modules/.bin/sequelize db:seed:undo:all --debug true --env production" server
.PHONY: undo-seeds

undo-migration:
	@docker-compose run --rm --entrypoint="node_modules/.bin/sequelize db:migrate:undo --debug true --env production" server
.PHONY: undo-migration

server: run-migrations run-seeds
	@docker-compose up --build --force-recreate server
.PHONY: server

down:
	@docker-compose down
.PHONY: down