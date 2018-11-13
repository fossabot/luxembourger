#!/usr/bin/env bash

rm -r ./build

git reset --hard HEAD
git pull

git push github master

yarn
yarn build

docker-compose build
docker-compose down
docker-compose up -d --force-recreate