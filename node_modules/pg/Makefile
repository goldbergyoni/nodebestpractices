SHELL := /bin/sh

connectionString=postgres://

params := $(connectionString)

node-command := xargs -n 1 -I file node file $(params)

.PHONY : test test-connection test-integration bench test-native \
	 lint publish test-missing-native update-npm

all:
	npm install

help:
	@echo "make test-all [connectionString=postgres://<your connection string>]"

test: test-unit

test-all: lint test-missing-native test-unit test-integration test-native


update-npm:
	@npm i npm --global

bench:
	@find benchmark -name "*-bench.js" | $(node-command)

test-unit:
	@find test/unit -name "*-tests.js" | $(node-command)

test-connection:
	@echo "***Testing connection***"
	@node script/create-test-tables.js $(params)

test-missing-native:
	@echo "***Testing optional native install***"
	@rm -rf node_modules/pg-native
	@rm -rf node_modules/libpq
	@node test/native/missing-native.js
	@rm -rf node_modules/pg-native
	@rm -rf node_modules/libpq

node_modules/pg-native/index.js:
	@npm i --no-save pg-native

test-native: node_modules/pg-native/index.js test-connection
	@echo "***Testing native bindings***"
	@find test/native -name "*-tests.js" | $(node-command)
	@find test/integration -name "*-tests.js" | $(node-command) native

test-integration: test-connection
	@echo "***Testing Pure Javascript***"
	@find test/integration -name "*-tests.js" | $(node-command)

test-binary: test-connection
	@echo "***Testing Pure Javascript (binary)***"
	@find test/integration -name "*-tests.js" | $(node-command) binary

test-pool:
	@find test/integration/connection-pool -name "*.js" | $(node-command) binary

lint:
	@echo "***Starting lint***"
	node_modules/.bin/eslint lib
