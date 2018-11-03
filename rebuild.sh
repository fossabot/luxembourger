#!/usr/bin/env bash

rm -r ./build

git reset --hard HEAD
git pull

git push github master

npm install
npm run-script build

docker-compose build
docker-compose down
docker-compose up -d --force-recreate