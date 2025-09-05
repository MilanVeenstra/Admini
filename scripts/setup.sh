#!/bin/bash

# Dutch AI Accounting System - Initial Setup Script
set -e

echo "🇳🇱 Setting up Dutch AI Accounting System..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

echo "✅ Docker is running"

# Copy environment files if they don't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp .env.example .env
fi

if [ ! -f frontend/.env ]; then
    echo "📝 Creating frontend/.env file from template..."
    cp frontend/.env.example frontend/.env
fi

echo "🐳 Building Docker containers..."
docker-compose build

echo "🚀 Starting services..."
docker-compose up -d

echo "⏳ Waiting for database to be ready..."
sleep 15

echo "🔄 Running database migrations..."
docker-compose exec backend alembic upgrade head

echo ""
echo "✅ Setup complete!"
echo ""
echo "📊 Service URLs:"
echo "   Frontend:  http://localhost:3000"
echo "   Backend:   http://localhost:8000"
echo "   API Docs:  http://localhost:8000/docs"
echo ""
echo "🛠️  Development commands:"
echo "   make logs     - View all service logs"
echo "   make down     - Stop all services"
echo "   make shell    - Open backend shell"
echo "   make test     - Run tests"
echo ""
echo "📚 Check README.md for more information"