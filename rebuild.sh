#!/usr/bin/env bash
rm -r ./build

git pull

npm run-script build

docker-compose build
docker-compose up -d