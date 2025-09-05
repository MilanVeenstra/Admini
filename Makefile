# Dutch AI Accounting System - Development Makefile
.PHONY: help build up down restart logs clean test backend-test frontend-test migrate shell db-shell

# Default target
help:	## Show this help message
	@echo "Dutch AI Accounting System - Development Commands"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

# Docker commands
build:	## Build all Docker images
	docker-compose build

up:	## Start all services
	docker-compose up -d

down:	## Stop all services
	docker-compose down

restart: down up	## Restart all services

logs:	## View logs from all services
	docker-compose logs -f

logs-backend:	## View backend logs only
	docker-compose logs -f backend

logs-frontend:	## View frontend logs only
	docker-compose logs -f frontend

logs-db:	## View database logs only
	docker-compose logs -f db

# Database commands
migrate:	## Run database migrations
	docker-compose exec backend alembic upgrade head

migrate-create:	## Create new migration (usage: make migrate-create MESSAGE="your message")
	docker-compose exec backend alembic revision --autogenerate -m "$(MESSAGE)"

migrate-downgrade:	## Downgrade database by one revision
	docker-compose exec backend alembic downgrade -1

db-shell:	## Open PostgreSQL shell
	docker-compose exec db psql -U accounting_user -d accounting_db

# Testing commands
test:	## Run all tests
	$(MAKE) backend-test
	$(MAKE) frontend-test

backend-test:	## Run backend tests
	docker-compose exec backend pytest -v

frontend-test:	## Run frontend tests
	docker-compose exec frontend npm test

# Development commands
shell:	## Open backend shell
	docker-compose exec backend bash

frontend-shell:	## Open frontend shell
	docker-compose exec frontend sh

install-backend:	## Install backend dependencies
	docker-compose exec backend pip install -r requirements.txt

install-frontend:	## Install frontend dependencies
	docker-compose exec frontend npm install

# Code quality commands
lint-backend:	## Lint backend code
	docker-compose exec backend black . --check
	docker-compose exec backend isort . --check-only

lint-frontend:	## Lint frontend code
	docker-compose exec frontend npm run lint

format-backend:	## Format backend code
	docker-compose exec backend black .
	docker-compose exec backend isort .

format-frontend:	## Format frontend code
	docker-compose exec frontend npm run lint:fix

# Cleanup commands
clean:	## Clean up Docker resources
	docker-compose down -v --remove-orphans
	docker system prune -f

clean-all:	## Clean up all Docker resources including images
	docker-compose down -v --remove-orphans
	docker system prune -a -f

# Setup commands
setup:	## Initial project setup
	cp .env.example .env
	cp frontend/.env.example frontend/.env
	$(MAKE) build
	$(MAKE) up
	sleep 10
	$(MAKE) migrate
	@echo "✅ Setup complete! Visit http://localhost:3000"

# Production commands (for future use)
build-prod:	## Build production images
	docker-compose -f docker-compose.prod.yml build

deploy-prod:	## Deploy to production
	docker-compose -f docker-compose.prod.yml up -d