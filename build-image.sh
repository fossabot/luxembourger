#!/usr/bin/env bash
rm -r ./dist

cd ../
npm run-script build

docker build -t rodislav/becoming:0.0.1-SNAPSHOT .

