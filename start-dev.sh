#!/bin/bash

cd "$(dirname "$0")"

echo "🐳 Starting database..."
docker compose up -d

echo "⏳ Waiting for database..."
sleep 10

echo "🔧 Starting backend..."
cd backend/SportsonBackendShell
dotnet run

echo "🎨 Starting frontend..."
cd ../../frontend
npm install
npm run dev